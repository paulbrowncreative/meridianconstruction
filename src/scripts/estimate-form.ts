/**
 * Estimate request form: accessible validation + async submission.
 *
 * Submission target: Netlify Forms (the form carries data-netlify="true", so
 * Netlify registers it at deploy time and stores/e-mails each submission).
 * To use another backend (Formspree, Basin, a custom endpoint), set
 * PUBLIC_FORM_ENDPOINT at build time; the form then POSTs there instead.
 *
 * Without JavaScript the browser submits natively to /contact/thank-you/.
 */
import { track } from './analytics';

const ENDPOINT: string = import.meta.env.PUBLIC_FORM_ENDPOINT || '/';
const PHONE = '(248) 669-3910';
const PHONE_HREF = 'tel:+12486693910';

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const labelText = (field: Field) =>
  document.querySelector(`label[for="${field.id}"]`)?.firstChild?.textContent?.trim() ?? field.name;

function messageFor(field: Field): string {
  const v = field.validity;
  const label = labelText(field);
  if (field instanceof HTMLInputElement && field.type === 'file') {
    const file = field.files?.[0];
    const max = Number(field.dataset.maxBytes || 0);
    if (file && max && file.size > max) {
      return `That file is ${(file.size / 1_000_000).toFixed(1)} MB. Please attach a file under ${max / 1_000_000} MB, or mention the drawings in your description and we will send an upload link.`;
    }
    return '';
  }
  if (v.valueMissing) {
    return field instanceof HTMLSelectElement ? `Choose an option for ${label.toLowerCase()}.` : `Enter your ${label.toLowerCase()}.`;
  }
  if (field.name === 'email' && (v.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
    return 'Enter an email address like name@company.com.';
  }
  if (field.name === 'phone' && field.value.replace(/\D/g, '').length < 10) {
    return 'Enter a phone number with area code, like (248) 555-0123.';
  }
  if (v.tooShort) {
    return field.name === 'message'
      ? 'Add a little more detail — a sentence or two about the space and scope is enough.'
      : `${label} is too short.`;
  }
  if (v.tooLong) return `${label} is too long.`;
  return '';
}

function setError(field: Field, message: string) {
  const error = document.getElementById(`${field.id}-error`);
  const hint = field.getAttribute('aria-describedby')?.split(' ').filter((id) => !id.endsWith('-error')) ?? [];
  if (message) {
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', [...hint, `${field.id}-error`].join(' '));
    if (error) {
      error.textContent = message;
      error.hidden = false;
    }
  } else {
    field.removeAttribute('aria-invalid');
    if (hint.length) field.setAttribute('aria-describedby', hint.join(' '));
    else field.removeAttribute('aria-describedby');
    if (error) {
      error.textContent = '';
      error.hidden = true;
    }
  }
}

export function initEstimateForm() {
  const form = document.querySelector<HTMLFormElement>('[data-estimate-form]');
  if (!form) return;
  const status = document.querySelector<HTMLElement>('[data-form-status]')!;
  const summary = form.querySelector<HTMLElement>('[data-error-summary]')!;
  const summaryList = form.querySelector<HTMLElement>('[data-error-list]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
  const fileLabel = form.querySelector<HTMLElement>('[data-file-label]');

  const fields = Array.from(form.querySelectorAll<Field>('input:not([type="hidden"]), select, textarea')).filter(
    (f) => f.name !== 'company_website',
  );
  const touched = new WeakSet<Field>();

  // Preselect the service when arriving from a service page (?service=slug).
  const slug = new URLSearchParams(window.location.search).get('service');
  if (slug) {
    const option = form.querySelector<HTMLOptionElement>(`#f-service option[data-slug="${CSS.escape(slug)}"]`);
    if (option) option.selected = true;
  }

  fileInput?.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (fileLabel) fileLabel.textContent = file ? file.name : 'Choose a file';
    setError(fileInput, messageFor(fileInput));
  });

  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      if (field.value) touched.add(field);
      if (touched.has(field)) setError(field, messageFor(field));
    });
    field.addEventListener('input', () => {
      if (touched.has(field) || field.getAttribute('aria-invalid') === 'true') setError(field, messageFor(field));
    });
  });

  const setBusy = (busy: boolean) => {
    submit.setAttribute('aria-disabled', String(busy));
    submitLabel.textContent = busy ? 'Sending…' : 'Send Estimate Request';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submit.getAttribute('aria-disabled') === 'true') return;

    // Validate everything
    const errors: { field: Field; message: string }[] = [];
    fields.forEach((field) => {
      touched.add(field);
      const message = messageFor(field);
      setError(field, message);
      if (message) errors.push({ field, message });
    });

    if (errors.length) {
      summaryList.replaceChildren(
        ...errors.map(({ field, message }) => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `#${field.id}`;
          a.textContent = message;
          a.addEventListener('click', (e) => {
            e.preventDefault();
            field.focus();
          });
          li.append(a);
          return li;
        }),
      );
      summary.hidden = false;
      summary.focus();
      return;
    }
    summary.hidden = true;

    setBusy(true);
    status.hidden = true;
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      track('generate_lead', { form_name: 'estimate', service: (form.elements.namedItem('service') as HTMLSelectElement).value });
      status.className = 'form-status form-status--success';
      status.innerHTML = `
        <h2 class="h3">Thank you — your request is in.</h2>
        <p>We will review your project details and contact you to talk through scope, schedule and next steps.
        If your project is time-sensitive, call us at <a href="${PHONE_HREF}" class="inline">${PHONE}</a>.</p>`;
      status.hidden = false;
      form.hidden = true;
      status.focus();
      status.scrollIntoView({ block: 'start' });
    } catch (err) {
      track('form_error', { form_name: 'estimate', error: String(err) });
      status.className = 'form-status form-status--error';
      status.innerHTML = `
        <h2 class="h4">Your request didn’t go through.</h2>
        <p>Nothing you entered has been lost — please try again in a moment. If it still won’t send, call us at
        <a href="${PHONE_HREF}" class="inline">${PHONE}</a> and we will take your project details by phone.</p>`;
      status.hidden = false;
      status.focus();
    } finally {
      setBusy(false);
    }
  });
}

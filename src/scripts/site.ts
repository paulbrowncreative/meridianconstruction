/**
 * Site-wide progressive enhancement. Every feature here degrades to working
 * HTML without JavaScript (links still navigate, content stays visible).
 */
import { track } from './analytics';

/* ---------- Sticky header state ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Mobile menu ---------- */
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

function setMenu(open: boolean, returnFocus = true) {
  if (!menuToggle || !menu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  header?.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) {
    menu.querySelector<HTMLElement>('a')?.focus();
  } else if (returnFocus) {
    menuToggle.focus();
  }
}

menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
  // Keep Tab cycling between the menu and its toggle while open.
  if (e.key === 'Tab') {
    const focusables = menu.querySelectorAll<HTMLElement>('a, button');
    const last = focusables[focusables.length - 1];
    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      menuToggle?.focus();
    }
  }
});
menuToggle?.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
  if (e.key === 'Tab' && !e.shiftKey && menuToggle.getAttribute('aria-expanded') === 'true') {
    e.preventDefault();
    menu?.querySelector<HTMLElement>('a')?.focus();
  }
});
// Close if the viewport grows past the mobile breakpoint while open.
window.matchMedia('(min-width: 64rem)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false, false);
});

/* ---------- Services dropdown (disclosure pattern) ---------- */
document.querySelectorAll<HTMLElement>('[data-dropdown]').forEach((item) => {
  const toggle = item.querySelector<HTMLButtonElement>('[data-dropdown-toggle]');
  const list = item.querySelector<HTMLElement>('[data-dropdown-menu]');
  if (!toggle || !list) return;
  let closeTimer: number | undefined;

  const set = (open: boolean) => {
    window.clearTimeout(closeTimer);
    toggle.setAttribute('aria-expanded', String(open));
    list.hidden = !open;
  };

  toggle.addEventListener('click', () => set(toggle.getAttribute('aria-expanded') !== 'true'));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !list.hidden) {
      set(false);
      toggle.focus();
    }
  });
  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget as Node)) set(false);
  });
  // Hover-to-open only for precise pointers; touch uses the toggle button.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    item.addEventListener('mouseenter', () => set(true));
    item.addEventListener('mouseleave', () => {
      closeTimer = window.setTimeout(() => set(false), 160);
    });
  }
  document.addEventListener('click', (e) => {
    if (!item.contains(e.target as Node)) set(false);
  });
});

/* ---------- Reveal on scroll ---------- */
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (revealables.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Click tracking ---------- */
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  track(el.dataset.track!, {
    location: el.dataset.trackLocation ?? 'unknown',
    link_url: el.getAttribute('href') ?? undefined,
  });
});

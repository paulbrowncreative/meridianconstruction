/**
 * Analytics bridge. No analytics vendor is loaded by this site.
 *
 * Events are pushed to `window.dataLayer` only if a tag manager has created
 * it (e.g. Google Tag Manager installed after consent is configured). Without
 * one, calls are no-ops, so nothing is collected by default.
 *
 * Events:
 *   generate_lead  — estimate form submitted successfully (GA4 recommended event)
 *   click_to_call  — any tel: link
 *   cta_click      — primary "Request an Estimate" buttons
 *   form_error     — estimate form failed to submit
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (!Array.isArray(window.dataLayer)) return;
  window.dataLayer.push({ event, ...params });
}

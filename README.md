# Meridian Construction Companies — website

Marketing site for **Meridian Construction Companies** (Wixom, MI), built with [Astro](https://astro.build) as a fully static, multi-page site. It ships only a few kilobytes of JavaScript, needs no runtime server, and the forms run on Netlify.

- Strategy, audit, SEO plan and redirect map: [`docs/AUDIT-AND-STRATEGY.md`](docs/AUDIT-AND-STRATEGY.md)
- QA results: [`docs/QA-REPORT.md`](docs/QA-REPORT.md)

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + static build to dist/
npm run preview   # serve dist/ locally
```

Requires Node 20+ (22 recommended).

## Project structure

```
src/
  data/site.ts        ← business facts (NAP, optional email/hours/license). Edit here first.
  data/services.ts    ← all service page copy, FAQs, delivery comparison
  data/projects.ts    ← portfolio case studies (empty until real projects are supplied)
  data/schema.ts      ← JSON-LD builders (only emit verified fields)
  layouts/Base.astro  ← <head>, SEO/OG tags, structured data, header/footer
  components/         ← Header, Footer, PlanDrawing, CtaBand, FaqList, DeliveryTable, Steps…
  pages/              ← routes (file-based)
  scripts/            ← nav/menu, reveal, estimate form, analytics bridge
  styles/global.css   ← design tokens + base styles
public/               ← fonts, icons, OG image, _redirects
tools/generate-images.mjs ← regenerates og-default.png and icons (needs Playwright)
netlify.toml          ← build, headers, noindex for previews
```

## Deployment (Netlify — recommended)

1. Push this repo to GitHub and choose **Add new site → Import from Git** in Netlify. The build settings are read from `netlify.toml`.
2. **Domain:** add `www.mymeridianconstruction.com` as the primary domain and the apex as a redirect. Netlify provisions HTTPS automatically.
3. **Forms:** in *Site configuration → Forms*, enable form detection, then redeploy. The `estimate` form will appear. Then:
   - under *Form notifications*, add an **email notification** to the inbox that should receive leads;
   - turn on spam filtering. A honeypot field is already in place.
4. **Previews:** deploy previews and branch deploys automatically get `noindex` and a `Disallow: /` robots.txt (`PUBLIC_NOINDEX=true` in `netlify.toml`).
5. After launch, submit `https://www.mymeridianconstruction.com/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.

**Other hosts:**

- The site is plain static files in `dist/`, so any host works.
- Netlify Forms won't exist elsewhere. Set `PUBLIC_FORM_ENDPOINT` at build time to a form backend that accepts `multipart/form-data` (e.g. Formspree, Basin, or your own endpoint) and returns 2xx.
- Port the 301s in `public/_redirects` to that host's format.

### Form behaviour

- **Validation:** client-side, accessible (error summary, per-field messages, `aria-invalid`), with an async submit.
- **Success:** shows an inline confirmation and fires `generate_lead`.
- **Failure:** keeps everything the visitor entered and shows the phone number.
- **Without JavaScript:** the native POST goes to `/contact/thank-you/`.
- **Preselection:** `?service=<slug>` preselects the service (service-page CTAs use this).
- **File upload:** one optional PDF or image up to 8 MB, within Netlify's request limit.

## Analytics

No analytics or tracking script is installed, and no tracking ID was invented. `src/scripts/analytics.ts` pushes events to `window.dataLayer` **only if** a tag manager has created it.

| Event | When it fires |
|---|---|
| `generate_lead` | estimate form submitted successfully |
| `click_to_call` | any tel: link (with `location`) |
| `cta_click` | primary estimate buttons (with `location`) |
| `form_error` | estimate form failed to submit |

To activate:

1. Add GA4 through Google Tag Manager, behind a consent banner if your audience or jurisdiction requires one.
2. Mark `generate_lead` and `click_to_call` as key events.
3. Update `/privacy/` to reflect the analytics in use.

## Business information still needed

Fields left as `null` in `src/data/site.ts` stay hidden until they are filled in. They then appear automatically in the footer, contact page and structured data.

| Needed | Where it goes |
|---|---|
| Official **logo** (SVG) | Replace markup in `src/components/Logo.astro`, then re-run `tools/generate-images.mjs` |
| Public **email** for estimates | `site.email` |
| **Office hours** | `site.hours` |
| **Legal name** (e.g. "…, Inc.") | `site.legalName` |
| **Founding year** (directories suggest ~2013 — unverified) | `site.foundingYear` |
| **License** number, **insurance** statement | `site.licenseNumber`, `site.insuranceStatement` |
| Google Business Profile / LinkedIn / Facebook URLs | `site.sameAs` |
| **Project photography + details** (client-approved) | `src/data/projects.ts` (instructions in file) |
| **Testimonials / reviews** (real, attributable, permissioned) | Add a section when available — never fabricate |
| Confirmed **service radius** | Unlocks a genuine service-area page |
| The old site's **gallery URL** | `public/_redirects` |
| Confirm Meridian carpentry is offered to other GCs (subcontract) as well as within its own contracts | `src/data/services.ts` copy |

## Editing content

- **Service copy and FAQs:** `src/data/services.ts`. The page template, schema and nav update automatically.
- **New project:** add images under `src/assets/projects/<slug>/` and an entry in `src/data/projects.ts`. A `/projects/<slug>/` page, the portfolio grid and the home-page "Recent projects" section all appear automatically. Images are resized to responsive AVIF/WebP by Astro.
- **Colours, type and spacing:** CSS variables at the top of `src/styles/global.css`.

## Licences

Archivo and IBM Plex Mono are licensed under the SIL Open Font License 1.1 (self-hosted from Fontsource).

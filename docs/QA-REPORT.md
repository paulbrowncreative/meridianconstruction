# QA Report

_Run October 2, 2026 against the production build (`npm run build` → `astro preview`) in headless Chromium (Playwright). Every result below was observed directly, not estimated._

## Build & static checks

| Check | Result |
|---|---|
| `astro check` (TypeScript + templates) | 0 errors, 0 warnings, 0 hints |
| Production build | 12 pages, sitemap generated |
| Internal links and assets (all `href`/`src` in `dist/`) | 528 checked, **0 broken** |
| JSON-LD on every page | All blocks parse as valid JSON |
| One `<h1>` per page | ✅ all 12 |
| Titles ≤ 60 chars / descriptions ≤ 160 chars (indexable pages) | ✅ |
| Canonicals | Self-referencing HTTPS `www` URLs; omitted on noindex utility pages |
| `robots.txt` | Production: allow all + sitemap. Previews (`PUBLIC_NOINDEX=true`): `Disallow: /` and `noindex` meta |
| Sitemap | 10 indexable URLs; thank-you and 404 excluded |
| JavaScript shipped | ~2.3 KB site script + 4.1 KB form script on `/contact/` only (uncompressed) |

## Lighthouse 12.8.2

Run locally against `astro preview`, so there is no CDN. Production numbers will differ.

| Page | Mode | Perf | A11y | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/services/general-contracting/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/services/general-contracting/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/contact/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/contact/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/projects/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/projects/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/about/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/about/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |

Lighthouse's automated accessibility audit covers only part of WCAG 2.2 AA. Manual checks are listed below.

## Responsive

Every page was checked at **360, 390, 768, 1024, 1440 and 1920 px**:

- **Horizontal overflow:** 0 px on every page at every width.
- **Console errors:** none.
- **Visual review:** home, service, projects, about and contact pages reviewed at mobile, tablet and desktop.

Issues found during visual review, all fixed:

- Icons inside child components ignored their scoped size rules, which made one arrow render oversized. Fixed with a global `.icon` default and `:global(svg)` overrides.
- The `[hidden]` attribute was overridden by `display: grid`, so the error summary and field errors showed early. Fixed with a global `[hidden]` rule.
- The phone number wrapped in the header, footer and contact aside. Fixed with `nowrap`.
- A missing space in "MI 48393" (JSX whitespace) and in "with us —". Fixed.
- The mobile menu button showed both the open and close icons. Fixed.
- Uneven vertical spacing in grid items with titles of different lengths. Fixed with `align-content: start`.
- The delivery comparison numbering was out of order. Fixed.

## Functional tests (automated in Playwright)

| Test | Result |
|---|---|
| Skip link is first Tab stop | ✅ |
| Services dropdown: keyboard open (Enter), Tab into items, Esc closes and returns focus | ✅ |
| Mobile menu: opens, `aria-expanded` updates, focus moves to first link, Esc closes and returns focus to toggle | ✅ |
| FAQ accordions (`<details>`) open on click and keyboard | ✅ |
| `/contact/?service=design-build` preselects Design/Build | ✅ |
| Empty submit → error summary shown and focused, five specific messages, `aria-invalid` + `aria-describedby` set | ✅ |
| Invalid email / short phone → specific correction messages | ✅ |
| Submit when the endpoint fails (local server rejects POST) → error state with phone number; entered data retained | ✅ |
| Submit when the endpoint returns 200 (simulated Netlify) → multipart POST sent, success message shown and focused, form hidden | ✅ |

**Not testable here:** a real Netlify Forms submission and the email notification. Both need the site deployed on Netlify with form detection enabled. After the first deploy, submit one test lead with an attachment and confirm it arrives.

## Accessibility (manual)

- Semantic landmarks: header, nav (Main / Mobile / Breadcrumb / footer navs labelled), main, footer.
- Heading order is sequential. Section headings are linked via `aria-labelledby`.
- Focus indicator: a 3 px vermillion outline, visible on paper and night backgrounds.
- Every text and background pair used meets 4.5:1. The smallest is accent on paper at 5.05:1.
- Tap targets are at least 44 px for nav, buttons, form controls and footer links. Breadcrumbs are at least 24 px.
- Form fields:
  - every field has a visible `<label>`;
  - required and optional are marked in text, not by colour alone;
  - hints are linked with `aria-describedby`;
  - inputs use 16 px+ text to avoid iOS zoom.
- `prefers-reduced-motion` disables the plan-drawing animation, reveals and smooth scroll.
- The decorative floor-plan SVG is `aria-hidden` and captioned "illustrative".

## Known limitations / recommended next steps

1. **Real project photography and case studies.** This is the single biggest conversion gain. The portfolio infrastructure is ready.
2. **Real Google reviews or testimonials**, shown near the CTAs.
3. **Confirm the old gallery URL** and finalise `_redirects`.
4. **Logo file**, plus email, hours and license in `site.ts`.
5. **Claim and align the Google Business Profile**, then add it to `sameAs`.
6. **Analytics with consent** (see README).
7. **Content:** once real project data exists, consider:
   - a service-area page backed by actual local projects;
   - articles answering buyer questions, e.g. "What does a tenant improvement cost per square foot in Oakland County?" and "Landlord vs. tenant TI responsibilities".
8. **Copy review by the client.** The commitments on the home and About pages restate the original site's promises (on time, on budget, quality, worker safety) in more detail, and the owner should approve the wording.

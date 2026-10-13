# QA Report

_Final pass on October 13, 2026, run against the production build (`npm run build` → `astro preview`) in headless Chromium (Playwright). Every number below was measured, not estimated. Lighthouse runs were local, without a CDN, so production numbers will differ somewhat._

## Scope of this release

| Area | What's included |
|---|---|
| **Brand** | Meridian's real logo mark (recovered from the legacy site) and brand blue `#0A4498` with navy. These replace the placeholder wordmark and vermillion. |
| **Case studies (4)** | Aqua-Tots Swim Schools, NKD Pizza, Menchie's Frozen Yogurt, and public-sector offices. Each has verified facts, real photos, before/after pairs and a gallery with lightbox. |
| **New pages** | `/franchise-build-outs/` (landing page), `/resources/` with 2 long-form guides, and `/projects/` rebuilt around the case studies. |
| **Trust** | A client list taken from the old site ("happy customers"), plus "Where we've built" with 10 Michigan communities. |
| **Service pages** | Job-site photo galleries for General Contracting and Commercial Carpentry, plus related case studies. |
| **Site size** | 20 HTML pages, 18 of them indexable. |

## Build & static checks

| Check | Result |
|---|---|
| `astro check` (TypeScript + templates) | 0 errors, 0 warnings, 0 hints |
| Production build | 20 pages; images output as responsive AVIF + WebP |
| Internal links, `src` and `srcset` assets | 1,209 checked, **0 broken** |
| Orphan pages (in sitemap, nothing links to them) | **0** |
| Titles ≤ 60 chars, descriptions 70–160 chars, unique | ✅ all indexable pages |
| Exactly one `<h1>` per page; no skipped heading levels | ✅ all 20 pages |
| Every `<img>` has an `alt` attribute | ✅ (decorative logo uses `alt=""`) |
| JSON-LD parses on every page | ✅ |
| Canonical matches URL; noindex utility pages carry no canonical | ✅ |
| Sitemap | 18 URLs (thank-you and 404 excluded) |
| Words run together in rendered text (whitespace QA) | 14 instances found and fixed (Astro trims line breaks next to inline links) |

**Structured data:**

| Where | Types |
|---|---|
| Every page | `GeneralContractor` (`areaServed`: Michigan), `WebPage` |
| Home | `WebSite` |
| Inner pages | `BreadcrumbList` |
| Service pages | `Service` |
| Pages with visible FAQs | `FAQPage` |
| Case studies | `CreativeWork` with `ImageObject` list |
| Guides | `Article` |

## Accessibility: axe-core 4 (WCAG 2.0/2.1/2.2 A + AA, plus best practices)

Scanned every template at 390 px and 1440 px.

- **Final result: 0 violations.**
- **Found and fixed:** `label-content-name-mismatch` on the logo link (the accessible name didn't match the visible text).
- **Found and fixed by the static check:** the logo `<img>` was missing `alt`, because Astro drops an empty alt from `<Image>`. It's now a plain `<img alt="">`.

## Lighthouse 12.8.2

| Page | Mode | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` | mobile | 99 | 100 | 100 | 100 | 1.9 s | 0 | 0 ms |
| `/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/projects/` | mobile | 98 | 100 | 100 | 100 | 2.3 s | 0 | 0 ms |
| `/projects/` | desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| `/projects/aqua-tots-swim-schools/` | mobile | 99 | 100 | 100 | 100 | 2.0 s | 0 | 0 ms |
| `/projects/aqua-tots-swim-schools/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/services/commercial-carpentry/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/services/commercial-carpentry/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/franchise-build-outs/` | mobile | 99 | 100 | 100 | 100 | 2.0 s | 0 | 0 ms |
| `/franchise-build-outs/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/resources/tenant-improvement-process/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/resources/tenant-improvement-process/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/contact/` | mobile | 99 | 100 | 100 | 100 | 1.8 s | 0 | 0 ms |
| `/contact/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| `/about/` | mobile | 99 | 100 | 100 | 100 | 1.9 s | 0 | 0 ms |
| `/about/` | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |

## Responsive

All 18 indexable pages were loaded at 360, 390, 768, 1024, 1440 and 1920 px: 108 page loads in total.

- **Horizontal overflow:** 0 px in every case.
- **Console or page errors:** 0.

Visual review covered home, case study, projects, franchise, guide, contact and the header at 1024, 1216, 1232, 1280 and 1440 px. Issues found and fixed:

- **Header wrapping.** At 1024–1440 px the "Our Work" link and the CTA wrapped, and the logo subtitle collided with the nav at 1024 px. Fixed with `nowrap`, tighter nav padding below 80 rem, and hiding Resources between 64 and 76 rem (it stays in the footer and mobile menu).
- **Mobile hero.** The decorative plan drawing pushed real content below the fold on phones, so it's now hidden under 40 rem.
- **Mobile client list.** It was very tall, so its type size is reduced under 48 rem.
- **Article contents and Related lists.** The list markers were misaligned.
- **Article sidebar CTA.** The button text wrapped.

## Functional tests (automated, Playwright): 20 of 20 pass

| Test | Result |
|---|---|
| Lightbox opens; full-size image loads (>1000 px) | ✅ |
| Arrow keys page through; counter updates; Esc closes; focus returns to the gallery link | ✅ |
| Services dropdown: mouse hover then click keeps it open; second click closes; Enter opens; Esc closes | ✅ *(hover-then-click bug found and fixed)* |
| Dropdown and mobile menu include Franchise Build-Outs and Resources | ✅ |
| Skip link is the first Tab stop | ✅ |
| Mobile menu opens and closes (Esc) | ✅ |
| `?service=commercial-carpentry` preselects the service; "Public sector" appears in Type of space | ✅ |
| Empty submit shows the error summary; valid submit sends a multipart POST with `form-name=estimate`; success state shown | ✅ |
| No page errors | ✅ |

**Not testable here:**

- A real Netlify Forms submission and its email notification. Both need the live deploy (see README → Deployment).
- Search rankings. No one can guarantee or test rankings; the site gives Google everything it rewards, and the rest depends on time, reviews, links and the Google Business Profile.

## Known limitations / next steps (highest impact first)

1. **Google Business Profile.**
   - Claim or verify it.
   - Match the name, address and phone exactly.
   - Add the case-study photos.
   - Add the profile URL to `site.sameAs`.
   - Ask repeat clients for reviews. For local "contractor near me" searches, this outweighs anything on the site.
2. **Original photos and vector logo.** The site uses AI-upscaled 2016-era images. Camera originals and a vector logo would be a visible upgrade.
3. **Client permission.** Confirm the client list and case studies are still OK to publish. The old site published them, but relationships change.
4. **Real testimonials** from Aqua-Tots, NKD or Menchie's owners, placed next to the CTAs.
5. **Content cadence.** One useful guide per month, for example "landlord vs. tenant TI responsibilities", "restaurant build-out permits in Michigan" or "what a GC needs to price your drawings". Topical authority compounds.
6. **Analytics with consent.** Add GA4 through GTM; the events are already wired (see README).
7. **Business details.** Fill in `site.ts` (email, hours, license, insurance) so they appear in the footer, the contact page and the structured data.

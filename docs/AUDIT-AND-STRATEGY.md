# Meridian Construction Companies — Audit, Strategy & SEO Plan

_Prepared October 2, 2026 for the rebuild of www.mymeridianconstruction.com._

## 1. Research method and limits

The build environment's network policy **blocked direct access** to `www.mymeridianconstruction.com` and to most directory sites (Procore, Yellow Pages, ConstructConnect, RocketReach, 411.info, the Wayback Machine). Everything below comes from search-engine-indexed copy of the live site and from directory snippets.

**Before launch, someone with access should open the old site and confirm:**

- the full list of old URLs, including the gallery page;
- any copy, photography or logo files worth carrying over.

| Status | Fact | Source |
|---|---|---|
| ✅ Verified (site) | Business name: **Meridian Construction Companies** | Site page titles |
| ✅ Verified (site) | Phone **(248) 669-3910** | Site contact page URL/title |
| ✅ Verified (site) | Four services: General Contracting, Commercial Carpentry, Design/Build, Construction Management | Site `/company-services/*` |
| ✅ Verified (site) | Tagline: "premium commercial construction services on time and on budget"; "high quality and sharp accuracy" | Home page snippet |
| ✅ Verified (site) | GC specializes in interior build-outs / tenant improvements, built to the designer's plans and specs within time and price, upholding quality and worker safety | General Contracting page |
| ✅ Verified (site) | Carpentry: retail, office, medical, food establishments and recreational facilities. Scope covers framing, drywall, acoustical ceilings, doors & hardware, and bathroom partitions & accessories | Commercial Carpentry page |
| ✅ Verified (site) | Design/Build: the same team from conception to completion; the owner walks the site and takes part in design; overlapping phases bring value engineering | Design/Build page |
| ✅ Verified (site) | CM: advanced construction knowledge, a skilled network of laborers, and monitoring that contracted services run on time and on budget | Construction Management page |
| ✅ Verified (directories, consistent) | Address **47990 West Road, Wixom, MI 48393** | Yellow Pages, Procore, ConstructConnect, Buzzfile |
| ⚠️ Unverified | Founded ~2013; principal named in one directory; "commercial & residential"; ~$3M revenue | ZoomInfo / RocketReach snippets — **not used on the site** |
| ⚠️ Conflict | One directory says "Farmington" | Possibly an older address — confirm |
| ❌ Not found | Email, hours, license #, insurance, testimonials, reviews, awards, team, project names, photography, logo file | — |

Several unrelated firms share the name (PA, NH, MA, MT, GA, TX, WA, and Meridian Contracting Services in Alpena, MI). The site copy avoids anything that could blur the brand with them.

## 2. Audit of the existing site

**Preserve**

- The four-service structure and the service-specific language.
- The core promise "on time and on budget".
- The phone number and address (NAP).
- URL equity of the service pages, via 301s.

**Redesign**

- Everything visual. The previous site is a dated template: page titles read "Meridian Construction Companies Contact Form – …", the URLs are odd (`/about-us-1/`, `/contact-us-248-669-3910/`), and it has no HTTPS canonical.

**Eliminate**

- Broken or meaningless title patterns.
- The phone number in the URL slug.
- Thin service pages (one paragraph each).
- The "Contact Form" branding in every title.

**Rewrite**

- All copy. The original is short and generic. The new copy expands each service around real buyer questions (delivery method, drawings, roles, scope) without adding unverified claims.

**Missing assets** (blocking or limiting)

- Project photography and case studies. The `/projects/` page shows an honest "coming soon" state, and the grid and detail pages switch on automatically when data is added.
- Logo file. A typographic wordmark is in place.
- Testimonials or Google reviews.
- License and insurance statement.
- Team and leadership.
- Public email and hours.
- Google Business Profile URL.

**Strategic opportunities**

1. **Own "tenant improvement contractor" + Wixom / Oakland County.** Most local competitors lead with residential remodeling. Meridian's verified niche is commercial interiors.
2. **Self-performed carpentry as a differentiator.** A GC whose own crews do framing, drywall, ceilings, doors and partitions controls the scopes that set the pace of an interior schedule. The site leads with this.
3. **Help buyers choose a delivery method.** No local competitor explains GC vs. design/build vs. CM in plain terms. The comparison table on the home page and services hub captures commercial-investigation intent.
4. **Speak the spec language.** The CSI MasterFormat reference on the carpentry page signals expertise to architects, owner's reps and GCs.
5. **Drawings-first conversion.** "Have drawings? Send them over." plus a file upload fits how commercial work is actually priced.

## 3. Audience & journey

- **Primary audience:** commercial tenants and business owners building out leased space (retail, office, medical, restaurant, fitness), plus landlords and property managers turning over suites.
- **Secondary audience:** architects and designers looking for a builder; GCs looking for an interior carpentry package.
- **Journey:** search ("tenant improvement contractor Novi", "commercial drywall contractor Oakland County") → service page → proof and fit ("right fit when…", FAQs, process) → estimate form, with a drawings upload, or a phone call.
- **Primary conversion:** estimate request.
- **Secondary conversions:** click-to-call and directions.

## 4. Information architecture

```
/                                   Home — positioning, services, value, delivery comparison, sectors, process, location, FAQ, CTA
/services/                          Services hub + delivery-method comparison
/services/general-contracting/      Tenant improvements / interior build-outs
/services/commercial-carpentry/     Framing, drywall, ACT, doors & hardware, partitions (+ CSI reference)
/services/design-build/             Design/build
/services/construction-management/  Construction management
/projects/                          Sectors we build (unique content) + case-study grid (activates with data)
/projects/<slug>/                   Case study pages (generated from src/data/projects.ts)
/about/                             Story, principles, how we work, office
/contact/                           Estimate request form (Netlify Forms, file upload)
/contact/thank-you/                 No-JS confirmation (noindex)
/privacy/                           Privacy notice for form data
```

**Deliberately not built:**

- **City/location pages.** No verified service radius, and no local projects to make them non-doorway.
- **A standalone FAQ page.** FAQs live on the pages where their intent is.
- **A blog.** Nobody is assigned to write it yet.
- **A testimonials page.** No verified reviews exist.

## 5. Page-level SEO plan

| URL | Primary intent | Target topics | Title |
|---|---|---|---|
| `/` | Navigational / commercial | commercial general contractor Wixom MI; commercial construction Oakland County | Commercial General Contractor in Wixom, MI \| Meridian |
| `/services/` | Commercial investigation | commercial construction services; GC vs design-build vs CM | Commercial Construction Services \| Meridian, Wixom MI |
| `/services/general-contracting/` | Commercial / local | tenant improvement contractor; interior build-out contractor; commercial GC | Tenant Improvement Contractor \| Meridian, Wixom MI |
| `/services/commercial-carpentry/` | Commercial / local | commercial carpentry; metal stud framing; commercial drywall; acoustical ceilings; toilet partitions | Commercial Carpentry, Framing & Drywall \| Wixom, MI |
| `/services/design-build/` | Commercial investigation | design-build contractor; design-build commercial interiors; value engineering | Design-Build Commercial Contractor \| Wixom, Michigan |
| `/services/construction-management/` | Commercial investigation | commercial construction management; construction manager vs GC | Commercial Construction Management \| Wixom, MI |
| `/projects/` | Informational / proof | retail / office / medical / restaurant build-out | Commercial Interiors We Build \| Meridian Construction |
| `/about/` | Navigational / trust | Meridian Construction Companies Wixom | About Meridian Construction Companies \| Wixom, MI |
| `/contact/` | Transactional | construction estimate Wixom; contact Meridian Construction | Request a Construction Estimate \| Meridian, Wixom MI |

**Technical SEO applied to every page:**

- A unique title (≤ 60 characters) and meta description (≤ 160).
- One H1.
- A self-referencing HTTPS canonical.
- Open Graph and Twitter tags with a 1200×630 image.
- Breadcrumbs, both visible and as `BreadcrumbList`.
- JSON-LD `@graph`: `GeneralContractor` (verified NAP only) and `WebPage`, plus `WebSite` (home), `Service` (service pages) and `FAQPage` (pages with visible FAQs).
- Sitemap and robots.txt.
- Staging builds are `noindex` and disallowed.

**Internal linking:**

- Every service page links to the three others ("Related services").
- The sectors page links to the relevant services.
- The home page and footer link to every service.
- Every page carries the contact CTA.

**Local SEO:**

- NAP is identical everywhere and pulled from `src/data/site.ts`.
- Directions link and Oakland County / I-96 context.
- Nearby communities are named as geography, not as a claimed service area.
- Next steps: claim and align the Google Business Profile (category "General contractor", secondary "Commercial construction contractor" / "Drywall contractor"), then add its URL to `sameAs`.

## 6. Redirect map (301)

Implemented in `public/_redirects`.

| Old URL | New URL |
|---|---|
| `/company-services/` | `/services/` |
| `/company-services/general-contracting/` | `/services/general-contracting/` |
| `/company-services/design-build/` | `/services/design-build/` |
| `/company-services/commercial-carpentry/` | `/services/commercial-carpentry/` |
| `/company-services/construction-management/` | `/services/construction-management/` |
| `/about-us-1/` | `/about/` |
| `/contact-us-248-669-3910/` | `/contact/` |
| `/gallery*`, `/portfolio`, `/projects-gallery` | `/projects/` _(best guess; confirm the real gallery URL)_ |

Configure at the host as well:

- `http://` → `https://`
- `mymeridianconstruction.com` → `www.mymeridianconstruction.com`

After launch, submit the new sitemap in Google Search Console and watch Coverage for 404s from old URLs.

## 7. Design rationale

- **Concept: "the meridian line."** A meridian is a reference line. The brand system borrows from drafting:
  - drafting-paper neutrals, graphite ink and a survey-vermillion accent;
  - a centerline motif;
  - an illustrative floor-plan hero (captioned as illustrative, so it never pretends to be a project);
  - spec-sheet numbering and labels in IBM Plex Mono.
- **Typography:** Archivo, variable, with the width axis used for wide display headlines and normal width for text, plus IBM Plex Mono for labels. Both are self-hosted, with one preloaded file.
- **Layout:**
  - editorial ruled lists instead of generic card grids;
  - alternating paper, tinted and night sections for rhythm;
  - sticky section headings on long two-column sections.
- **No stock photography.** None could be presented honestly as Meridian's work, so the design carries itself on type, drawings and structure. Real project photos slot into the portfolio when supplied.

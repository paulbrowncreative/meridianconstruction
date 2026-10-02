/**
 * Single source of truth for business facts.
 *
 * Everything here was verified against the existing website
 * (mymeridianconstruction.com, via search-indexed copy) or matching public
 * directory listings. Fields set to `null` / empty arrays are UNVERIFIED —
 * the sections that use them stay hidden until real values are supplied.
 * See README.md → "Business information still needed".
 */
export const site = {
  name: 'Meridian Construction Companies',
  shortName: 'Meridian Construction',
  legalName: null as string | null, // e.g. "Meridian Construction Companies, Inc." — confirm
  url: 'https://www.mymeridianconstruction.com',
  phone: {
    display: '(248) 669-3910',
    href: 'tel:+12486693910',
    e164: '+1-248-669-3910',
  },
  email: null as string | null, // public inbox for estimates — confirm before publishing
  address: {
    street: '47990 West Road',
    city: 'Wixom',
    region: 'MI',
    regionName: 'Michigan',
    postalCode: '48393',
    country: 'US',
    county: 'Oakland County',
  },
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Meridian+Construction+Companies+47990+West+Road+Wixom+MI+48393',
  // Unverified — only rendered when provided.
  hours: null as string | null, // e.g. "Mon–Fri, 7:00 a.m.–4:00 p.m."
  foundingYear: null as number | null, // directories suggest ~2013; confirm
  licenseNumber: null as string | null, // Michigan Residential Builder / M&A license, if applicable
  insuranceStatement: null as string | null, // e.g. "Fully insured — COI on request"
  sameAs: [] as string[], // Google Business Profile, LinkedIn, Facebook URLs once confirmed
  // The building types the existing site names under its carpentry service.
  sectors: ['Retail', 'Office', 'Medical', 'Food service', 'Recreational'],
} as const;

export type Site = typeof site;

/** Nearby communities — geographic fact relative to the Wixom office, not a service-area claim. */
export const nearbyCommunities = [
  'Novi',
  'Commerce Township',
  'Walled Lake',
  'Farmington Hills',
  'South Lyon',
  'Milford',
  'West Bloomfield',
  'Livonia',
];

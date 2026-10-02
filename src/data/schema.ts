/**
 * JSON-LD builders. Only verified facts from site.ts are emitted; optional
 * fields appear automatically once they are filled in there.
 */
import { site } from './site';
import { services, type Faq, type Service } from './services';

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

export const organizationSchema = () => ({
  '@type': 'GeneralContractor',
  '@id': ORG_ID,
  name: site.name,
  ...(site.legalName && { legalName: site.legalName }),
  url: `${site.url}/`,
  logo: `${site.url}/icon-512.png`,
  image: `${site.url}/og-default.png`,
  telephone: site.phone.e164,
  ...(site.email && { email: site.email }),
  ...(site.foundingYear && { foundingDate: String(site.foundingYear) }),
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  hasMap: site.directionsUrl,
  ...(site.sameAs.length && { sameAs: site.sameAs }),
  knowsAbout: [
    'Tenant improvements',
    'Interior build-outs',
    'Commercial carpentry',
    'Design-build construction',
    'Construction management',
    'Value engineering',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Commercial construction services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@id': `${site.url}/services/${s.slug}/#service` },
    })),
  },
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${site.url}/`,
  name: site.name,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
});

export const serviceSchema = (s: Service) => ({
  '@type': 'Service',
  '@id': `${site.url}/services/${s.slug}/#service`,
  name: s.name,
  serviceType: s.name,
  description: s.metaDescription,
  url: `${site.url}/services/${s.slug}/`,
  provider: { '@id': ORG_ID },
  // The office location — not a claimed service radius.
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: { '@type': 'ContactPoint', telephone: site.phone.e164, contactType: 'sales' },
    serviceUrl: `${site.url}/contact/`,
  },
});

export const faqSchema = (faqs: Faq[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export interface Crumb {
  name: string;
  href: string;
}

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${site.url}${c.href}`,
  })),
});

export const webPageSchema = (opts: { url: string; name: string; description: string; type?: string }) => ({
  '@type': opts.type ?? 'WebPage',
  '@id': `${opts.url}#webpage`,
  url: opts.url,
  name: opts.name,
  description: opts.description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en-US',
});

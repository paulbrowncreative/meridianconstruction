import type { ImageMetadata } from 'astro';

/**
 * Project case studies.
 *
 * Every fact here comes from Meridian's previous website (project pages
 * /aqua-tots/, /nkd-pizza/, /menchies/, /public-private/ and its photo
 * gallery — crawled October 2026). Photos are Meridian's own gallery images,
 * AI-upscaled; see docs/IMAGE-INVENTORY.md. Images flagged "confirm rights"
 * (likely franchisor marketing photos) are deliberately NOT used here.
 *
 * Location lists name the cities each client was built in; individual photos
 * are not attributed to a specific location because the old site didn't.
 */

// Aqua-Tots
import atExteriorBefore from '../assets/legacy/aqua-tots/aqua-tots-exterior-before-renovation.jpg';
import atExteriorAfter from '../assets/legacy/aqua-tots/aqua-tots-exterior-after-renovation.jpg';
import atPoolBefore from '../assets/legacy/aqua-tots/aqua-tots-pool-during-construction.jpg';
import atPoolAfter from '../assets/legacy/aqua-tots/aqua-tots-pool-completed.jpg';
import atRibbonFinished from '../assets/legacy/aqua-tots/aqua-tots-ribbon-soffit-finished.jpg';
import atRibbonDrywall from '../assets/legacy/aqua-tots/aqua-tots-ribbon-soffit-drywall.jpg';
import atDrumFrame from '../assets/legacy/aqua-tots/aqua-tots-drum-soffit-steel-frame.jpg';
import atDrumFinished from '../assets/legacy/aqua-tots/aqua-tots-drum-soffit-finished.jpg';
import atSoffitFraming from '../assets/legacy/aqua-tots/aqua-tots-curved-soffit-framing.jpg';
import atSoffitFinished from '../assets/legacy/aqua-tots/aqua-tots-curved-soffit-finished.jpg';
import atSoffitOverhead from '../assets/legacy/aqua-tots/aqua-tots-soffit-framing-overhead.jpg';
import atSoffitCeiling from '../assets/legacy/aqua-tots/aqua-tots-soffit-acoustical-ceiling.jpg';
import atDrumFraming from '../assets/legacy/aqua-tots/aqua-tots-drum-soffit-framing.jpg';
import atLobby from '../assets/legacy/aqua-tots/aqua-tots-lobby-reception-finished.jpg';
import atBrick from '../assets/legacy/aqua-tots/aqua-tots-brick-storefront.jpg';
// NKD Pizza
import nkdStorefront from '../assets/legacy/nkd-pizza/nkd-pizza-storefront-drive-thru.jpg';
import nkdCounter from '../assets/legacy/nkd-pizza/nkd-pizza-order-counter.jpg';
import nkdDining from '../assets/legacy/nkd-pizza/nkd-pizza-dining-room.jpg';
import nkdKitchen from '../assets/legacy/nkd-pizza/nkd-pizza-stainless-kitchen.jpg';
import nkdSeating from '../assets/legacy/nkd-pizza/nkd-pizza-counter-seating.jpg';
import nkdWall from '../assets/legacy/nkd-pizza/nkd-pizza-feature-wall.jpg';
// Menchie's
import menStorefront from '../assets/legacy/menchies/menchies-storefront-exterior.jpg';
import menBar from '../assets/legacy/menchies/menchies-yogurt-bar-wall.jpg';
import menTile from '../assets/legacy/menchies/menchies-mosaic-tile-wall.jpg';
import menKiosk from '../assets/legacy/menchies/menchies-yogurt-bar-kiosk.jpg';
import menBulkhead from '../assets/legacy/menchies/menchies-curved-bulkhead.jpg';
import menDoor from '../assets/legacy/menchies/menchies-restroom-door.jpg';
import menTileProgress from '../assets/legacy/menchies/menchies-tile-wall-during-construction.jpg';
// Public sector
import pubExterior from '../assets/legacy/public-sector/dhs-office-building-exterior.jpg';
import pubCounters from '../assets/legacy/public-sector/public-office-service-counter-millwork.jpg';
import pubWindow from '../assets/legacy/public-sector/public-office-transaction-window.jpg';
import pubFloor from '../assets/legacy/public-sector/public-office-open-floor-carpet.jpg';
import pubCorridor from '../assets/legacy/public-sector/public-office-corridor.jpg';
import pubFountain from '../assets/legacy/public-sector/public-office-corridor-drinking-fountain.jpg';
import pubPartition from '../assets/legacy/public-sector/public-office-operable-partition.jpg';
import pubRestroom from '../assets/legacy/public-sector/public-office-restroom-partition.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  slug: string;
  /** Card / H1 title */
  title: string;
  client: string;
  /** One of site.sectors */
  sector: string;
  /** Building type as the old site described it */
  type: string;
  locations: string[];
  /** Service slugs from services.ts */
  services: string[];
  seoTitle: string;
  metaDescription: string;
  summary: string;
  body: string[];
  scope: string[];
  cover: Photo;
  /** Paired construction → finished views */
  pairs?: { before: Photo; after: Photo; caption: string }[];
  gallery: Photo[];
}

export const projects: Project[] = [
  {
    slug: 'aqua-tots-swim-schools',
    title: 'Aqua-Tots Swim Schools',
    client: 'Aqua-Tots Swim Schools',
    sector: 'Recreational',
    type: 'Recreational facility',
    locations: ['Canton, MI', 'Novi, MI', 'Troy, MI', 'Sterling Heights, MI'],
    services: ['general-contracting', 'commercial-carpentry'],
    seoTitle: 'Aqua-Tots Swim School Build-Outs in Michigan | Meridian',
    metaDescription:
      'How Meridian built Aqua-Tots Swim Schools in Canton, Novi, Troy and Sterling Heights: retail-to-swim-school conversions with custom curved soffits.',
    summary:
      'Retail storefronts converted into indoor swim schools — natatoriums, parent viewing areas and a lobby defined by sculpted, curving ceiling soffits.',
    body: [
      'Aqua-Tots Swim Schools came back to Meridian as general contractor for locations in Canton, Novi, Troy and Sterling Heights. Each one turns a conventional retail box into something very different: an indoor teaching pool, changing areas, a parent viewing gallery and a bright, branded lobby.',
      'The photographs show the transformation from both sides of the wall. Outside, a dated storefront becomes a clean, branded façade. Inside, an empty pool basin becomes a finished natatorium with lane lines and flags.',
      'The signature of these interiors is overhead. Ribbon-shaped and drum-shaped soffits sweep through the lobby in the brand’s blue, and every curve starts as light-gauge steel framing hung from the structure, then is wrapped in drywall, finished and coordinated with the acoustical ceiling and lighting around it. It is exactly the kind of carpentry that is easy to draw and hard to build — and it is built by Meridian’s own carpenters.',
    ],
    scope: [
      'General contracting for a retail-to-recreational conversion',
      'Exterior storefront renovation',
      'Custom curved and drum soffits in light-gauge steel and drywall',
      'Acoustical ceilings coordinated with soffits and lighting',
      'Pool area, viewing area, lobby and changing-area interiors',
    ],
    cover: { src: atLobby, alt: 'Finished Aqua-Tots lobby and reception desk under a blue circular drum soffit' },
    pairs: [
      {
        before: { src: atExteriorBefore, alt: 'Retail storefront before the Aqua-Tots renovation' },
        after: { src: atExteriorAfter, alt: 'Completed Aqua-Tots Swim School storefront after renovation' },
        caption: 'Storefront: before and after',
      },
      {
        before: { src: atPoolBefore, alt: 'Swim school pool area during construction, before finishes' },
        after: { src: atPoolAfter, alt: 'Completed swim school pool with lane lines and pennant flags' },
        caption: 'Pool area: under construction and complete',
      },
      {
        before: { src: atRibbonDrywall, alt: 'Ribbon-shaped soffit after drywall, before paint' },
        after: { src: atRibbonFinished, alt: 'Finished blue ribbon soffit running through the lobby ceiling' },
        caption: 'Ribbon soffit: drywall and finished',
      },
      {
        before: { src: atDrumFrame, alt: 'Circular light-gauge steel frame for a suspended drum soffit' },
        after: { src: atDrumFinished, alt: 'Finished blue drum soffit with pendant lights' },
        caption: 'Drum soffit: steel frame and finished',
      },
    ],
    gallery: [
      { src: atSoffitFraming, alt: 'Curved metal-stud framing for a decorative ceiling soffit during construction' },
      { src: atSoffitFinished, alt: 'Finished blue curved soffit above a yellow lobby wall' },
      { src: atSoffitOverhead, alt: 'Overhead view of curved soffit framing hung from the roof deck' },
      { src: atSoffitCeiling, alt: 'Curved soffit integrated with an acoustical ceiling grid and light fixtures' },
      { src: atDrumFraming, alt: 'Circular drum soffit framing during drywall installation' },
      { src: atBrick, alt: 'Aqua-Tots Swim Schools brick storefront' },
    ],
  },
  {
    slug: 'nkd-pizza',
    title: 'NKD Pizza Restaurants',
    client: 'NKD Pizza',
    sector: 'Food service',
    type: 'Food franchise',
    locations: ['Sterling Heights, MI', 'Shelby Township, MI'],
    services: ['general-contracting'],
    seoTitle: 'NKD Pizza Restaurant Build-Outs | Meridian Construction',
    metaDescription:
      'Meridian was general contractor for NKD Pizza restaurants in Sterling Heights and Shelby Township, Michigan: order counter, dining room and kitchen.',
    summary:
      'Quick-service pizza restaurants with a drive-thru storefront, an open order counter, a polished-concrete dining room and a stainless commercial kitchen.',
    body: [
      'NKD Pizza brought Meridian in as general contractor for restaurants in Sterling Heights and Shelby Township. A quick-service restaurant packs a lot into a small footprint: a customer-facing order counter, a dining room, a working kitchen and — here — a drive-thru, all of which have to pass inspection before the doors open.',
      'The finished spaces are clean and direct: a branded order counter under pendant lights and menu boards, polished concrete underfoot, a feature wall carrying the brand’s story, and a stainless prep line behind the counter. Outside, a stone-clad pilaster and storefront glazing frame the entry beside the drive-thru lane.',
    ],
    scope: [
      'General contracting for a quick-service restaurant build-out',
      'Order counter, dining room and feature wall',
      'Commercial kitchen area coordinated with equipment',
    ],
    cover: { src: nkdCounter, alt: 'NKD Pizza order counter with pendant lights and menu boards' },
    gallery: [
      { src: nkdStorefront, alt: 'NKD Pizza storefront with stone pilaster and drive-thru signage' },
      { src: nkdDining, alt: 'NKD Pizza dining area with polished concrete floor' },
      { src: nkdKitchen, alt: 'Stainless steel prep line in the NKD Pizza kitchen' },
      { src: nkdSeating, alt: 'Order counter and bar stools in the NKD Pizza dining room' },
      { src: nkdWall, alt: 'Feature wall with brand typography at NKD Pizza' },
    ],
  },
  {
    slug: 'menchies-frozen-yogurt',
    title: 'Menchie’s Frozen Yogurt',
    client: 'Menchie’s Frozen Yogurt',
    sector: 'Food service',
    type: 'Food franchise',
    locations: ['Lansing, MI', 'Pittsfield Charter Township, MI'],
    services: ['general-contracting', 'commercial-carpentry'],
    seoTitle: 'Menchie’s Frozen Yogurt Build-Outs in Michigan | Meridian',
    metaDescription:
      'Meridian built Menchie’s Frozen Yogurt shops in Lansing and Pittsfield Charter Township — curved bulkheads, mosaic tile and a self-serve yogurt bar.',
    summary:
      'Franchise frozen-yogurt shops built to a demanding brand standard: curving branded bulkheads, mosaic tile walls and a self-serve yogurt bar.',
    body: [
      'Meridian was general contractor for Menchie’s Frozen Yogurt in Lansing and Pittsfield Charter Township. Franchise interiors leave little room for interpretation — the brand’s colors, curves and fixtures have to read the same from one shop to the next.',
      'The defining element is the yogurt bar wall: a curved, two-tone bulkhead carrying the “yogurt bar” graphic above a field of green mosaic tile, with framed openings for the self-serve machines below. The in-progress photo shows that wall mid-build, tile going on around the openings, before the machines and finishes arrive.',
    ],
    scope: [
      'General contracting for a franchise retail food build-out',
      'Curved bulkheads framed and finished to brand standards',
      'Mosaic tile feature walls with framed machine openings',
      'Restrooms, doors and hardware',
    ],
    cover: { src: menBar, alt: 'Menchie’s self-serve yogurt bar with mosaic tile and a curved branded bulkhead' },
    pairs: [
      {
        before: { src: menTileProgress, alt: 'Mosaic tile wall and machine openings during construction' },
        after: { src: menKiosk, alt: 'Finished yogurt bar with self-serve machines and ordering kiosk' },
        caption: 'Yogurt bar wall: under construction and complete',
      },
    ],
    gallery: [
      { src: menStorefront, alt: 'Menchie’s Frozen Yogurt storefront at dusk' },
      { src: menTile, alt: 'Green mosaic tile wall below a curved branded bulkhead' },
      { src: menBulkhead, alt: 'Curved bulkhead and tile wall along the yogurt bar' },
      { src: menDoor, alt: 'Restroom door and hardware set in a painted accent wall' },
    ],
  },
  {
    slug: 'public-sector-offices',
    title: 'Public-Sector Office Projects',
    client: 'State and municipal agencies',
    sector: 'Public sector',
    type: 'Public municipalities',
    locations: ['Inkster, MI', 'Southfield, MI', 'Flint, MI'],
    services: ['general-contracting'],
    seoTitle: 'Government Office Construction in Michigan | Meridian',
    metaDescription:
      'Meridian has been general contractor for Michigan public agencies including the Secretary of State, Dept. of Human Services, MLCC and City of Inkster.',
    summary:
      'Public-private projects for state and municipal agencies: service counters, transaction windows, open offices, corridors and accessible restrooms.',
    body: [
      'Meridian has served as general contractor on public-private projects for agencies including the Michigan Secretary of State in Inkster, the City of Inkster Justice Center, the Michigan Liquor Control Commission in Southfield, and the Department of Human Services in Inkster, Flint and Southfield.',
      'Public offices are built for heavy daily use and for the public. The photographs show the elements that make them work: millwork service counters and glazed transaction windows, wide carpeted circulation, operable partitions that let rooms change size, durable corridor finishes with drinking fountains, and accessible restrooms with toilet partitions and grab bars.',
    ],
    scope: [
      'General contracting for public-agency office space',
      'Service counters, millwork and transaction windows',
      'Open offices, corridors and operable partitions',
      'Accessible restrooms, partitions and accessories',
    ],
    cover: { src: pubCounters, alt: 'Government office service counters with wood millwork' },
    gallery: [
      { src: pubWindow, alt: 'Public service transaction window with glazing and wood counter' },
      { src: pubFloor, alt: 'Open office floor with carpet tile and acoustical ceiling' },
      { src: pubCorridor, alt: 'Long office corridor with carpet tile and wood doors' },
      { src: pubFountain, alt: 'Corridor with accent wall, drinking fountains and a wood door' },
      { src: pubPartition, alt: 'Operable partition and doors in a public office space' },
      { src: pubRestroom, alt: 'Restroom with toilet partition and grab bar' },
      { src: pubExterior, alt: 'Single-story brick office building from Meridian’s public-private portfolio' },
    ],
  },
];

export const getProject = (slug: string) => {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project: ${slug}`);
  return p;
};

/** Clients named on Meridian's previous site ("a few of our happy customers"). */
export const clients = [
  'Aqua-Tots Swim Schools',
  'NKD Pizza',
  'Menchie’s Frozen Yogurt',
  'Naked Fuel Juice Bar',
  'Jimmy John’s',
  'Halo Burger',
  'Subway',
  'Shell',
  'General Motors',
  'Central Michigan University',
  'Boji Group',
  'Grace Chapel',
  'Michigan Dept. of Human Services',
  'City of Inkster',
  'Michigan Liquor Control Commission',
  'Michigan Secretary of State',
];

/** Every city with a documented Meridian project. */
export const projectCities = [...new Set(projects.flatMap((p) => p.locations))];

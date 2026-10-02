/**
 * Service content. Copy expands on the scope each service had on the original
 * site (see docs/AUDIT-AND-STRATEGY.md) without adding unverified claims.
 */
export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  number: string;
  name: string;
  /** One line used in indexes and nav. */
  summary: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  /** Short paragraphs for the "what it is" section. */
  intro: string[];
  includesHeading: string;
  includes: { title: string; text: string }[];
  fitHeading: string;
  fit: string[];
  steps: { title: string; text: string }[];
  faqs: Faq[];
  related: string[];
  /** The URL this service lived at on the previous site (301 source). */
  legacyPath: string;
}

export const services: Service[] = [
  {
    slug: 'general-contracting',
    number: '01',
    name: 'General Contracting',
    summary:
      'Interior build-outs and tenant improvements built to your designer’s plans, inside the agreed schedule and price.',
    seoTitle: 'Tenant Improvement Contractor | Meridian, Wixom MI',
    metaDescription:
      'General contracting for interior build-outs and tenant improvements in southeast Michigan, built to your plans and specs — on schedule and on budget.',
    h1: 'Commercial general contracting for interior build-outs and tenant improvements',
    lede:
      'You have drawings, a lease date and a budget. We build the space your designer specified — inside the schedule and price we commit to, with quality and jobsite safety held to the same standard.',
    intro: [
      'Tenant improvement work is our core. A landlord needs a suite delivered to a lease date; a tenant needs to open on time. Either way, the job is to take a finished set of plans and specifications and turn them into a space that matches them — without surprises in the schedule or the invoice.',
      'As your general contractor we take responsibility for the whole build: pricing the drawings, scheduling and coordinating every trade, running the site safely and turning over a finished, punch-listed space. Because our own carpenters perform the framing, drywall, ceiling and door scopes, the trades that set the pace of most interior projects are under our direct control.',
    ],
    includesHeading: 'What our general contracting covers',
    includes: [
      {
        title: 'Plan & spec pricing',
        text: 'A line-by-line estimate built from your construction documents, with assumptions and exclusions written down rather than buried.',
      },
      {
        title: 'Scheduling & trade coordination',
        text: 'One schedule for every trade — mechanical, electrical, plumbing, flooring, finishes — sequenced so crews are not waiting on each other.',
      },
      {
        title: 'Self-performed carpentry',
        text: 'Framing, drywall, acoustical ceilings, doors and hardware, and restroom partitions and accessories handled by our own carpenters.',
      },
      {
        title: 'Site safety & supervision',
        text: 'A safe, orderly site for workers, building occupants and neighboring tenants, with someone accountable on the job.',
      },
      {
        title: 'Owner & designer communication',
        text: 'Questions go back to your architect or designer early, so field decisions are documented instead of improvised.',
      },
      {
        title: 'Closeout & punch list',
        text: 'A walkthrough, a complete punch list and a finished space ready for fixtures, furniture and your opening date.',
      },
    ],
    fitHeading: 'General contracting is the right fit when',
    fit: [
      'Your architect or designer has finished — or nearly finished — the construction documents.',
      'You want one contract and one point of accountability for the whole build.',
      'A firm price and a firm schedule matter more than changing the design mid-stream.',
      'You are a landlord turning over a suite, or a tenant building out a newly leased space.',
    ],
    steps: [
      { title: 'Send the drawings', text: 'Share your plans and specifications, the site address and your target dates.' },
      { title: 'Walk & price', text: 'We review the documents, walk the space and return a detailed estimate.' },
      { title: 'Schedule & mobilize', text: 'Once you approve, we lock the schedule, order long-lead items and coordinate trades.' },
      { title: 'Build & turn over', text: 'We build to the plans, walk the punch list with you and hand over the finished space.' },
    ],
    faqs: [
      {
        q: 'What is a tenant improvement (TI) or interior build-out?',
        a: 'It is the construction work that turns a leased commercial space into one ready for a specific tenant — walls, ceilings, doors, restrooms, finishes, and the mechanical, electrical and plumbing changes that go with them. It can range from refreshing an existing suite to building out an empty shell.',
      },
      {
        q: 'Do you need finished drawings before you can price a project?',
        a: 'For a firm general contracting price, yes — the estimate is built from the plans and specifications. If your drawings are still in progress, design/build or construction management may suit you better, and we can still give you budget guidance early.',
      },
      {
        q: 'Do you work for landlords, tenants or both?',
        a: 'Both. Landlords use a general contractor to deliver suites to a lease date; tenants use one to build out space they have leased. Tell us which side of the lease you are on when you request an estimate.',
      },
      {
        q: 'Which parts of the work do you perform yourselves?',
        a: 'Our carpenters self-perform framing, drywall, acoustical ceilings, doors and hardware, and restroom partitions and accessories. Specialty trades such as mechanical, electrical and plumbing are coordinated under our contract.',
      },
    ],
    related: ['commercial-carpentry', 'design-build', 'construction-management'],
    legacyPath: '/company-services/general-contracting/',
  },
  {
    slug: 'commercial-carpentry',
    number: '02',
    name: 'Commercial Carpentry',
    summary:
      'Framing, drywall, acoustical ceilings, doors and hardware, and restroom partitions for retail, office, medical, food service and recreational spaces.',
    seoTitle: 'Commercial Carpentry, Framing & Drywall | Wixom, MI',
    metaDescription:
      'Commercial carpentry in southeast Michigan: metal stud framing, drywall, acoustical ceilings, doors and hardware, and restroom partitions.',
    h1: 'Commercial carpentry: framing, drywall, ceilings, doors and partitions',
    lede:
      'Our carpenters build and remodel retail, office, medical, food service and recreational spaces — the walls, ceilings, openings and restroom fit-out that define an interior.',
    intro: [
      'Carpentry is where an interior takes shape. Wall layout sets every room, ceiling heights set every fixture, and door openings have to be right before hardware, inspections and occupancy can happen. When those scopes slip, the whole project slips.',
      'Our skilled carpenters handle these scopes as a complete package, either as part of a Meridian general contract or directly for owners and contractors who need a dependable interior carpentry crew. The standard is the same either way: built to the drawings, plumb, square and clean.',
    ],
    includesHeading: 'Carpentry scopes we perform',
    includes: [
      {
        title: 'Framing',
        text: 'Metal stud and wood framing for partitions, soffits, bulkheads and blocking — laid out to the drawings so every trade after us has true lines to work from.',
      },
      {
        title: 'Drywall',
        text: 'Gypsum board hanging and finishing for walls, ceilings and soffits, to the finish level the space calls for.',
      },
      {
        title: 'Acoustical ceilings',
        text: 'Suspended grid and acoustical tile ceilings, coordinated with lighting, diffusers and sprinkler heads.',
      },
      {
        title: 'Doors & hardware',
        text: 'Frames, doors and door hardware installed so openings swing, latch and close as specified.',
      },
      {
        title: 'Restroom partitions & accessories',
        text: 'Toilet partitions, grab bars, dispensers, mirrors and other restroom accessories mounted to plan.',
      },
      {
        title: 'And the rest of the interior',
        text: 'Trim, backing and the miscellaneous carpentry items that are easy to miss until a punch list finds them.',
      },
    ],
    fitHeading: 'Typical carpentry projects',
    fit: [
      'Retail stores and storefront build-outs',
      'Office suites, conference rooms and open-office reconfigurations',
      'Medical and professional offices',
      'Restaurants, cafés and other food establishments',
      'Fitness, entertainment and recreational facilities',
    ],
    steps: [
      { title: 'Review the plans', text: 'We take off framing, board, ceiling and door quantities from your drawings.' },
      { title: 'Price the scope', text: 'You get a carpentry proposal that states what is included and what is not.' },
      { title: 'Lay out & build', text: 'Walls are laid out to the plans, framed, inspected and closed in.' },
      { title: 'Finish & fit out', text: 'Ceilings, doors, hardware and restroom accessories complete the space.' },
    ],
    faqs: [
      {
        q: 'Do you only perform carpentry as part of your own general contracts?',
        a: 'No. Carpentry is a core service on its own. We perform it within Meridian general contracts and for owners or contractors who need the interior carpentry package handled. Tell us your role when you request a price.',
      },
      {
        q: 'Do you frame with metal studs or wood?',
        a: 'Both. Most commercial interiors are framed with light-gauge metal studs, while wood framing and blocking still have their place. We build to whatever your drawings and the applicable code require.',
      },
      {
        q: 'Which kinds of commercial spaces do you build?',
        a: 'Retail space, office space, medical facilities, food establishments and recreational facilities, along with other commercial interiors.',
      },
      {
        q: 'What do you need to price a carpentry scope?',
        a: 'A set of drawings (floor plan, reflected ceiling plan, wall types, and door and hardware schedule if available), the site address and your target dates. Upload them with the estimate form and we will follow up with any questions.',
      },
    ],
    related: ['general-contracting', 'design-build', 'construction-management'],
    legacyPath: '/company-services/commercial-carpentry/',
  },
  {
    slug: 'design-build',
    number: '03',
    name: 'Design/Build',
    summary:
      'One team from first concept to final punch list, with builders at the design table so value engineering happens before drawings are finished.',
    seoTitle: 'Design-Build Commercial Contractor | Wixom, Michigan',
    metaDescription:
      'Design-build commercial construction in southeast Michigan: one team from concept to completion, with builders at the design table for better value.',
    h1: 'Design/build: one team from concept to completion',
    lede:
      'Instead of finishing drawings, bidding them and hoping the numbers work, design/build puts the people who will build your space at the table while it is being designed.',
    intro: [
      'In a traditional project the design is finished before a builder ever prices it. If the bids come in high, you redesign, rebid and lose weeks. Design/build removes that gap: the same team carries your project from conception to completion.',
      'You walk the site with that team and take an active part in the design. Because the design and construction phases overlap, our builders talk to the architect while decisions are still cheap to change — pointing out the materials, details and sequences that deliver the best quality for the money. That is value engineering done early, not as a last-minute cut list.',
    ],
    includesHeading: 'What design/build gives you',
    includes: [
      {
        title: 'One contract, one team',
        text: 'Design and construction sit under one agreement, so there is one party responsible for the outcome.',
      },
      {
        title: 'You in the room',
        text: 'Walk the site with the team and stay involved in design decisions instead of reviewing them after the fact.',
      },
      {
        title: 'Early value engineering',
        text: 'Builders weigh in on materials and details while drawings are still evolving, protecting both quality and budget.',
      },
      {
        title: 'Overlapping phases',
        text: 'Early work can be planned and priced while later design is finalized, which can shorten the overall timeline.',
      },
      {
        title: 'Budget feedback as you design',
        text: 'Cost is checked against the design as it develops, not discovered at bid day.',
      },
      {
        title: 'Fewer handoffs',
        text: 'Fewer gaps between designer and builder means fewer change orders caused by drawings that did not anticipate field conditions.',
      },
    ],
    fitHeading: 'Design/build is the right fit when',
    fit: [
      'You know what the space needs to do but do not yet have drawings.',
      'Your budget is fixed and the design needs to fit it — not the other way around.',
      'Schedule matters and you would rather overlap design and construction than run them back to back.',
      'You want a single point of contact from first meeting to move-in.',
    ],
    steps: [
      { title: 'Walk the site', text: 'Meet the team at your space and talk through how it needs to work, your budget and your dates.' },
      { title: 'Design together', text: 'The design develops with builders reviewing cost, constructability and sequence as it goes.' },
      { title: 'Price & approve', text: 'You approve a price and schedule based on a design you have helped shape.' },
      { title: 'Build & complete', text: 'The same team that designed the space builds it and hands it over.' },
    ],
    faqs: [
      {
        q: 'How is design/build different from hiring an architect and then a contractor?',
        a: 'In the traditional design-bid-build approach, design is completed first and contractors price it afterward. In design/build the design and construction team work as one from the start, so cost and constructability shape the design instead of being tested at the end.',
      },
      {
        q: 'What is value engineering?',
        a: 'It is the process of finding the materials, details and methods that deliver the function and quality you need for the best price. Done during design, it improves value without stripping out what matters to you.',
      },
      {
        q: 'Can I still be involved in design decisions?',
        a: 'Yes — that is the point. You walk the site with the team and take an active part in the design process.',
      },
      {
        q: 'Can design/build save time?',
        a: 'It often can, because the design and build phases overlap rather than running strictly one after the other. How much depends on the project, permitting and long-lead materials; we will give you a realistic schedule once we understand the scope.',
      },
    ],
    related: ['general-contracting', 'construction-management', 'commercial-carpentry'],
    legacyPath: '/company-services/design-build/',
  },
  {
    slug: 'construction-management',
    number: '04',
    name: 'Construction Management',
    summary:
      'Experienced oversight of every contractor on your project, so the services you have bought are delivered on time and on budget.',
    seoTitle: 'Commercial Construction Management | Wixom, MI',
    metaDescription:
      'Commercial construction management in southeast Michigan: schedule, budget, trade and quality oversight so every contractor delivers on time and on budget.',
    h1: 'Construction management that keeps every contractor on time and on budget',
    lede:
      'When a project has many moving parts, someone has to watch all of them. We bring construction knowledge, a skilled network of trades and close attention to detail to piece the project together.',
    intro: [
      'Not every owner wants to hand the entire build to one general contractor. You may hold some contracts directly, have trades you already trust, or be running several projects at once. Construction management gives you an experienced builder working on your behalf to coordinate it all.',
      'We monitor the nitty-gritty details — schedules, submittals, deliveries, inspections and quality — to make sure every service you have contracted is performing on time and on budget. Where you need hands on the job, our skilled network of laborers and our own carpentry crews can fill the gaps.',
    ],
    includesHeading: 'What construction management covers',
    includes: [
      {
        title: 'Schedule control',
        text: 'A master schedule that every contractor works to, tracked and updated as the job moves.',
      },
      {
        title: 'Budget tracking',
        text: 'Costs and change requests monitored against the budget so overruns are flagged before they are spent.',
      },
      {
        title: 'Trade coordination',
        text: 'Sequencing, site access and handoffs between contractors managed so no one is waiting on someone else.',
      },
      {
        title: 'Quality oversight',
        text: 'Work checked against the plans and specifications as it is installed, not at the final walkthrough.',
      },
      {
        title: 'Skilled labor network',
        text: 'Access to a network of skilled trades and our own carpenters when the project needs additional capacity.',
      },
      {
        title: 'Clear reporting',
        text: 'Regular, plain-language updates on progress, risks and decisions that need your input.',
      },
    ],
    fitHeading: 'Construction management is the right fit when',
    fit: [
      'You hold — or want to hold — some contracts directly.',
      'Your project has several contractors and needs one experienced coordinator.',
      'You do not have in-house construction staff to supervise the work.',
      'Visibility into schedule and budget matters as much as the finished space.',
    ],
    steps: [
      { title: 'Define the scope', text: 'We review your project, contracts and goals and agree what we will manage.' },
      { title: 'Build the plan', text: 'A master schedule, budget baseline and communication plan for every contractor.' },
      { title: 'Manage the work', text: 'We coordinate the trades, track progress and quality, and resolve issues on site.' },
      { title: 'Close it out', text: 'Inspections, punch list and closeout documents completed and handed to you.' },
    ],
    faqs: [
      {
        q: 'What is the difference between a construction manager and a general contractor?',
        a: 'A general contractor holds the trade contracts and delivers the project for an agreed price. A construction manager oversees the project on your behalf — schedule, budget, coordination and quality — and may work alongside contracts you hold directly. We offer both, so we can recommend the one that suits your project.',
      },
      {
        q: 'Can you manage contractors I have already hired?',
        a: 'Yes. Coordinating contractors you already have under contract is a common reason owners bring in construction management.',
      },
      {
        q: 'Can you supply labor as well as management?',
        a: 'Yes. We have a skilled network of laborers and our own commercial carpenters, so we can add capacity where the project needs it.',
      },
      {
        q: 'How do I know which delivery method is right for my project?',
        a: 'Tell us where you are — no drawings, drawings in progress, or a finished set — and how you want to contract the work. We will recommend general contracting, design/build or construction management and explain why.',
      },
    ],
    related: ['general-contracting', 'design-build', 'commercial-carpentry'],
    legacyPath: '/company-services/construction-management/',
  },
];

export const getService = (slug: string) => {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
};

/** Delivery-method comparison shown on the home page and services hub. */
export const deliveryComparison = [
  {
    slug: 'general-contracting',
    stage: 'Drawings are finished',
    you: 'Hold one contract with Meridian',
    best: 'Firm price and schedule for a defined scope',
  },
  {
    slug: 'commercial-carpentry',
    stage: 'You need the interior carpentry package',
    you: 'Contract our carpenters directly or through your GC',
    best: 'Framing, drywall, ceilings, doors and partitions',
  },
  {
    slug: 'design-build',
    stage: 'You have an idea, not drawings',
    you: 'Hold one contract covering design and construction',
    best: 'Fitting the design to a budget and overlapping phases',
  },
  {
    slug: 'construction-management',
    stage: 'Any stage — several contractors involved',
    you: 'Keep some contracts directly; we oversee them all',
    best: 'Owner control and visibility across many trades',
  },
];

export interface Company {
  name: string;
  domain: string;
  equity: string;
  description: string;
  forSale: boolean;
  category: string;
  highlights: string[];
}

export const companies: Company[] = [
  {
    name: "FirebringerAI",
    domain: "firebringerai.com",
    equity: "Undisclosed (10%-30%)",
    description: "AI-powered solutions bringing the fire of innovation to enterprises.",
    forSale: true,
    category: "AI / Machine Learning",
    highlights: ["Cutting-edge AI", "Enterprise Solutions", "Growth Stage"],
  },
  {
    name: "DebateDash",
    domain: "debatedash.com",
    equity: "5%",
    description: "Platform for structured debates and intellectual discourse.",
    forSale: true,
    category: "EdTech / Social",
    highlights: ["Debate Platform", "Educational", "Community Driven"],
  },
  {
    name: "GiveGigs",
    domain: "givegigs.com",
    equity: "96.8%",
    description: "Freelance marketplace connecting talented professionals with opportunities. Powers authentication for VCA ecosystem.",
    forSale: true,
    category: "Marketplace / Gig Economy",
    highlights: ["Freelance Marketplace", "Authentication Provider", "Core Infrastructure"],
  },
  {
    name: "VentureCapitalArts",
    domain: "venturecapitalarts.com",
    equity: "100%",
    description: "You're looking at it! A satirical marketplace making a mockery of money.",
    forSale: true,
    category: "FinTech / Satire",
    highlights: ["Meta Investment", "Parody Platform", "This Very Site"],
  },
  {
    name: "CryptArtist",
    domain: "cryptartist.com",
    equity: "100%",
    description: "Digital art and crypto-collectibles platform for the modern artist and collector.",
    forSale: true,
    category: "NFT / Digital Art",
    highlights: ["Crypto Art", "NFT Platform", "Digital Collectibles"],
  },
  {
    name: "VibeCodeWorker",
    domain: "vibecodeworker.com",
    equity: "100%",
    description: "Vibe-driven development services. Code with feeling, ship with style.",
    forSale: true,
    category: "Dev Services / SAAS",
    highlights: ["Vibe Coding", "Developer Tools", "SAAS Templates"],
  },
  {
    name: "Sitefari",
    domain: "sitefari.com",
    equity: "100%",
    description: "Website safari - explore and discover the best of the web.",
    forSale: true,
    category: "Web Discovery",
    highlights: ["Web Exploration", "Curation", "Discovery Platform"],
  },
  {
    name: "MattyJacks",
    domain: "mattyjacks.com",
    equity: "100%",
    description: "The parent company. The mothership. Not for sale - this is where it all comes from.",
    forSale: false,
    category: "Holding Company",
    highlights: ["Parent Company", "Not For Sale", "Contact Hub"],
  },
  {
    name: "MyRide.Today",
    domain: "myride.today",
    equity: "Undisclosed (0%-5%)",
    description: "Transportation solutions for today's commuter.",
    forSale: true,
    category: "Transportation / Mobility",
    highlights: ["Mobility", "Transportation", "Early Stage"],
  },
];

export const saasTemplates = [
  {
    name: "ProperlyTrade",
    domain: "properlytrade.com",
    github: "https://github.com/mattyjacks/ProperlyTrade",
    description: "Trading platform SAAS template with full source code access.",
    seller: "CryptArtist.com & VibeCodeWorker.com",
    pricingTiers: [
      {
        cost: "$100",
        mattHours: "0 hr",
        freelancerHours: "0 hr",
        note: "Just the code license",
        domainIncluded: false,
        available: true,
      },
      {
        cost: "$300",
        mattHours: "2 hr",
        freelancerHours: "3 hr",
        note: "",
        domainIncluded: false,
        available: true,
      },
      {
        cost: "$1,000",
        mattHours: "10 hr",
        freelancerHours: "20 hr",
        note: "",
        domainIncluded: false,
        available: true,
      },
      {
        cost: "$5,000",
        mattHours: "20 hr",
        freelancerHours: "100 hr",
        note: "",
        domainIncluded: false,
        available: true,
      },
      {
        cost: "$50,000",
        mattHours: "75 hr",
        freelancerHours: "750 hr",
        note: "With domain included (only 1 available)",
        domainIncluded: true,
        available: true,
      },
      {
        cost: "$500,000",
        mattHours: "200 hr",
        freelancerHours: "3000 hr",
        note: "No more competitors (private GitHub), with domain (only 1 available, then this offer ends)",
        domainIncluded: true,
        available: true,
      },
    ],
    revenueTerms: {
      total: "4.20%",
      creators: "2.10%",
      charity: "0.84%",
      affiliates: "0.42%",
      mattyjacks: "0.84%",
      breakdown: {
        creators: "50%",
        charity: "20%",
        affiliates: "10%",
        mattyjacks: "20%",
      },
      description: "The platform requests 4.20% revenue of all projects started or templates hosted. Creators receive half (2.10%), charity and MattyJacks each receive 20% (0.84%), affiliates receive 10% (0.42%). Charity must be 3+ stars on CharityNavigator.org.",
      alternativeNote: "If revenue is not the primary compensation method, an equivalent payment structure must be agreed upon.",
    },
  },
];

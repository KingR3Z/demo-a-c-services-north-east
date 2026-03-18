import { client } from "@/config/client";

export const heroData = {
  title: "Professional Landscaping\n& Driveway Services",
  subtitle: `LANDSCAPING, DRIVEWAYS, PATIOS & FENCING IN ${client.basedIn.toUpperCase()}`,
  image: "/images/hero-bg-v2.jpg",
};

export const introData = {
  heading: `Trusted Landscaping Services Across ${client.basedIn}`,
  text: [
    `${client.name} is a professional landscaping and driveway company based in ${client.region}. Led by ${client.founderName}, we deliver high-quality driveways, patios, fencing and garden transformations — all backed by real Google reviews from satisfied customers.`,
    "Explore a curated selection of our completed projects within our Portfolio.",
  ],
  cta: { label: "Get a Free Quote", href: "/contact" },
  image: "/images/intro-circle-v2.jpg",
};

export const servicesData = {
  tabs: [
    {
      label: "DRIVEWAYS & PAVING",
      title: "Driveways & Paving",
      text: "Block paving, tarmac and resin-bound driveways designed and installed to the highest standard. We handle everything from excavation and sub-base preparation to the final finish, creating driveways that look stunning and last for years.",
      tagline: "Built to last — driveways you can be proud of.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-driveways-v2.jpg",
    },
    {
      label: "PATIOS & LANDSCAPING",
      title: "Patios & Landscaping",
      text: "From Indian stone patios to complete garden landscaping, we create outdoor living spaces tailored to your property. New lawns, planting, raised beds and decorative features — all professionally installed.",
      tagline: "Transform your garden into something special.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-patios-v2.jpg",
    },
    {
      label: "FENCING & BOUNDARIES",
      title: "Fencing & Boundaries",
      text: "Quality timber fencing including close board, lap panel and decorative styles. We remove old fencing and install new panels, posts and gates to give your property privacy and kerb appeal.",
      tagline: "Secure boundaries that look as good as they perform.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-fencing-v2.jpg",
    },
    {
      label: "GARDEN CLEARANCE",
      title: "Garden Clearance & Turfing",
      text: "Full garden clearances, waste removal and new turf installation. We tackle overgrown gardens, remove debris and lay fresh turf to give you a clean, green outdoor space ready to enjoy.",
      tagline: "From overgrown to outstanding — we handle it all.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-lawns-v2.jpg",
    },
  ],
};

export const whyChooseData = {
  title: `Why Choose ${client.name}?`,
  paragraphs: [
    `As a Companies House verified business based in ${client.basedIn}, we bring professionalism and accountability to every project across the North East.`,
    "Every job is approached with attention to detail, honest pricing and clear communication. We turn up when we say we will and deliver exactly what we promise.",
    `From the first visit through to the final clean-up, ${client.founderName} and the team provide a fully hands-on service. No subcontractors, no shortcuts — just quality workmanship.`,
    "Whether it's a new driveway, a garden transformation or a simple fence repair — we work to the same high standard on every job.",
  ],
  image: "/images/why-choose-new-v2.jpg",
};

export const philosophyData = {
  title: "Our Approach",
  paragraphs: [
    "We take a practical, customer-first approach to every project. We listen to what you need, give honest advice, and deliver exactly what we promise.",
    "Every job starts with a free, no-obligation visit and estimate. We'll walk through your property, discuss what needs doing, and give you a clear price with no hidden extras.",
    "We're proud of our work and we want you to be too. That's why we guarantee quality on every job and keep you updated throughout.",
  ],
  cta: { label: "See How We Work", href: "/about" },
  image: "/images/portfolio/project-05.jpg",
};

export const landscapingData = {
  title: "Complete Landscaping & Driveway Solutions",
  paragraphs: [
    "Whether it's a new block paved driveway, a garden patio, fencing, turfing or a full garden clearance — we handle everything from start to finish across the North East.",
    "Our experienced team works together on every project, ensuring consistent quality and a clean finish. We take pride in leaving every property better than we found it.",
  ],
  cta: { label: "View Our Projects", href: "/portfolio" },
  image: "/images/landscaping-main-v2.jpg",
};

export const ctaData = {
  heading: "Ready To Transform Your Outdoor Space?",
  text: "Get in touch for a free, no-obligation estimate. We'll come to you, discuss what you need and give you an honest price.",
  subtext: `Call ${client.founderName} on ${client.phone} or fill in the form below and we'll get back to you within 24 hours.`,
};

export const projectsShowcase = [
  { title: "Block Paved Driveway", location: "Hebburn", image: "/images/portfolio/project-50.jpg", slug: "block-paved-driveway" },
  { title: "Garden Patio", location: "Jarrow", image: "/images/portfolio/project-30.jpg", slug: "garden-patio" },
  { title: "Timber Fencing", location: "South Shields", image: "/images/portfolio/project-03.jpg", slug: "timber-fencing" },
  { title: "Turfing & Lawn", location: "Hebburn", image: "/images/portfolio/project-20.jpg", slug: "turfing-lawn" },
  { title: "Indian Stone Patio", location: "Gateshead", image: "/images/portfolio/project-10.jpg", slug: "indian-stone-patio" },
  { title: "Resin Driveway", location: "Washington", image: "/images/portfolio/project-40.jpg", slug: "resin-driveway" },
  { title: "Garden Transformation", location: "Sunderland", image: "/images/portfolio/project-55.jpg", slug: "garden-transformation" },
  { title: "Close Board Fencing", location: "Hebburn", image: "/images/portfolio/project-04.jpg", slug: "close-board-fencing" },
  { title: "Driveway Extension", location: "Boldon", image: "/images/portfolio/project-35.jpg", slug: "driveway-extension" },
  { title: "Garden Clearance", location: "Whitburn", image: "/images/portfolio/project-15.jpg", slug: "garden-clearance" },
];

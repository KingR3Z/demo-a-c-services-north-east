export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  designTime: string;
  installationTime: string;
  image: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "hebburn-driveway",
    title: "block paved driveway",
    description:
      "A tired concrete driveway replaced with premium herringbone block paving. Complete with new edging, drainage and a fresh look that transformed the front of the property.",
    location: "Hebburn",
    designTime: "1 week",
    installationTime: "5 days",
    image: "/images/portfolio/project-01.jpg",
  },
  {
    id: "jarrow-patio",
    title: "Indian stone patio",
    description:
      "Full back garden renovation featuring Indian stone patio slabs, new timber fencing and raised planting beds. A low-maintenance garden the whole family can enjoy.",
    location: "Jarrow",
    designTime: "1 week",
    installationTime: "7 days",
    image: "/images/portfolio/project-02.jpg",
  },
  {
    id: "south-shields-fencing",
    title: "close board fencing",
    description:
      "New close board fencing installed along the full boundary of a rear garden. Old panels removed, new concrete posts and gravel boards fitted with a clean professional finish.",
    location: "South Shields",
    designTime: "2 days",
    installationTime: "3 days",
    image: "/images/portfolio/project-03.jpg",
  },
  {
    id: "gateshead-turfing",
    title: "garden turfing & clearance",
    description:
      "Complete garden clearance followed by levelling, topsoil and premium turf installation. A neglected rear garden brought back to life in just three days.",
    location: "Gateshead",
    designTime: "1 day",
    installationTime: "3 days",
    image: "/images/portfolio/project-04.jpg",
  },
  {
    id: "washington-resin",
    title: "resin bound driveway",
    description:
      "A smooth, permeable resin bound driveway in golden tones. Modern finish with excellent drainage — a popular choice for properties across the North East.",
    location: "Washington",
    designTime: "3 days",
    installationTime: "2 days",
    image: "/images/portfolio/project-05.jpg",
  },
  {
    id: "sunderland-paving",
    title: "front garden paving",
    description:
      "Front garden converted from lawn to block paving, creating additional off-street parking. Matching pathway and border detail for a clean, unified look.",
    location: "Sunderland",
    designTime: "3 days",
    installationTime: "4 days",
    image: "/images/portfolio/project-06.jpg",
  },
  {
    id: "boldon-landscaping",
    title: "full garden landscaping",
    description:
      "Complete rear garden transformation including new patio, fencing, raised sleeper beds and decorative gravel. Designed for easy maintenance and year-round enjoyment.",
    location: "Boldon",
    designTime: "1 week",
    installationTime: "6 days",
    image: "/images/portfolio/project-07.jpg",
  },
  {
    id: "whitburn-tarmac",
    title: "tarmac driveway",
    description:
      "Professional tarmac driveway with block paving apron and border. A cost-effective, durable finish that enhanced the property's kerb appeal immediately.",
    location: "Whitburn",
    designTime: "2 days",
    installationTime: "2 days",
    image: "/images/portfolio/project-08.jpg",
  },
];

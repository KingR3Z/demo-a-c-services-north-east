import { client } from "@/config/client";

export const aboutHeaderData = {
  overline: `ABOUT ${client.name.toUpperCase()}`,
  heading: "Professional Landscaping & Driveway Services",
  paragraphs: [
    `${client.name} is a professional landscaping and driveway company based in ${client.region}. We specialise in driveways, patios, fencing and garden transformations — delivering quality workmanship across ${client.basedIn} and the surrounding areas.`,
    "With hands-on experience and a commitment to honest pricing, our team delivers reliable, high-quality results on every project — whether it's a new driveway or a full garden makeover.",
  ],
  image: "/images/about-landscape-v2.jpg",
};

export const coreValues = [
  {
    title: "Quality Workmanship",
    description:
      "Every project is completed to the highest standard. We use quality materials and proven techniques to ensure results that look great and stand the test of time.",
    icon: "shield",
  },
  {
    title: "Honest & Transparent",
    description:
      "No hidden costs, no surprises. We provide clear, detailed quotes and keep you informed throughout every stage of the project.",
    icon: "lightbulb",
  },
  {
    title: "Customer Focused",
    description:
      "We listen to what you want, offer practical advice, and work around your schedule. Your satisfaction is our priority on every job.",
    icon: "heart",
  },
];

export const directorData = {
  name: client.founderName,
  role: client.founderRole,
  image: "/images/director-portrait-v2.jpg",
  bio: [
    `${client.founderName} founded ${client.name} with a straightforward goal: to deliver quality landscaping and driveway services at fair prices for homeowners across ${client.basedIn} and the North East.`,
    `With extensive hands-on experience in driveways, patios, fencing and garden transformations, ${client.founderName} takes a practical, detail-oriented approach to every project.`,
    `${client.founderName} believes in doing things right the first time. Every job starts with a free site visit, an honest conversation about what needs doing, and a clear price with no hidden costs.`,
    `Under ${client.founderName}'s direction, ${client.name} has built a solid reputation across ${client.region} for reliability, quality workmanship and fair dealing.`,
    `When not on site, ${client.founderName} can be found spending time with family or planning the next project across the North East.`,
  ],
  cta: { label: `Contact ${client.founderName}`, href: "/contact" },
};

export const missionData = {
  heading: "Our Mission",
  paragraphs: [
    `At ${client.name}, our mission is to transform properties across ${client.basedIn} with quality landscaping, driveways and outdoor improvements. We believe every home deserves a well-finished outdoor space.`,
    "We approach every project with the same attention to detail, whether it's a new block paved driveway or a simple garden clearance. Our team takes pride in reliable service, honest pricing, and leaving every property better than we found it.",
    `As a local ${client.basedIn} business, we're committed to building lasting relationships with our customers. We treat every property as if it were our own.`,
  ],
  image: "/images/mission-bg-v2.jpg",
};

export const partnersData = {
  heading: "Our Trusted Partners",
  partners: client.partners,
};

export const awardsData = {
  heading: "Recognised for Quality & Service",
  awards: client.awards,
};

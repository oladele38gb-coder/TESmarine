import type { ServiceLine } from "@/content/projects";

export type Service = {
  slug: string;
  title: string;
  /** One or two sentences for cards. Based on TES's own services template (Nov 2026). */
  summary: string;
  /** Opening paragraph on the detail page. */
  intro: string;
  capabilities: string[];
  /** Project service lines shown as "Where we've done it" on the detail page. */
  projectLines: ServiceLine[];
  /** Permit categories (compliance.ts `category`) that back this service. */
  permitCategories: string[];
  /** Certification names (compliance.ts `name`) relevant to this service. */
  credentials: string[];
  showFleet?: boolean;
  /** Stand-in photos until TES supplies one per service. */
  image: { src: string; alt: string };
};

/** Lead line from TES's services template. */
export const servicesIntro =
  "We deliver engineering, procurement, installation and commissioning support offshore, with safety, efficiency and quality on every project.";

/**
 * Five services come from TES's services template ("TES Marine projects.docx", Nov 2026);
 * vessel charter is added because it leads TES's tagline, ISO 9001 scope and permits.
 * Capabilities are drawn only from that template, the permits, the ISO scope and completed projects.
 */
export const services: Service[] = [
  {
    slug: "vessel-charter",
    title: "Vessel charter",
    summary:
      "Time charter of our three owned, Nigerian-flagged utility and diving support vessels, with four-point mooring and a 5 t LARS on each.",
    intro:
      "TES owns and operates three Nigerian-flagged vessels, TES Smyrna, TES Crystal and TES Grace, available on time charter for diving support, utility and standby work. Each has four-point mooring, a 5 t air-winch launch and recovery system and Fi-Fi 1 fire-fighting.",
    capabilities: [
      "Time charter and vessel hire, within our ISO 9001:2015 certified scope",
      "Diving support vessel leasing, under an NMDPRA permit",
      "Four-point mooring and 5 t air-winch LARS on all three vessels",
      "Fi-Fi 1 fire-fighting with water spray",
      "Deck cranes from 8 t to 15.4 t, and accommodation for 20 to 33 persons",
      "Bureau Veritas class for TES Smyrna, ABS class for TES Crystal",
    ],
    projectLines: [],
    permitCategories: ["Vessel leasing"],
    credentials: ["ISO 9001:2015", "Bureau Veritas class", "NCDMB Marine Vessel Certificate", "Nigerian registry"],
    showFleet: true,
    image: { src: "/images/vessels/tes-smyrna.jpg", alt: "TES Smyrna at sea" },
  },
  {
    slug: "diving-subsea",
    title: "Subsea inspection, installation and diving",
    summary:
      "Underwater inspection, installation, maintenance and repair by certified divers, from FSO UWILD to mooring chain inspections.",
    intro:
      "Our dive teams carry out underwater inspection, installation, maintenance and repair for operators and contractors across the Niger Delta, using certified professionals and our own diving support vessels. We have provided maintenance diving at Chevron’s Escravos field since 2022.",
    capabilities: [
      "Underwater inspection in lieu of dry-docking (UWILD) for FSOs",
      "Buoy and mooring chain disconnection, cleaning, inspection and reconnection",
      "Tanker loadout and chain inspection support at export terminals",
      "Maintenance diving on producing fields",
      "Installation support for pipelines, PLEMs, spools, risers, mudmats and concrete mattresses",
      "Anode sled installation on jackets",
      "Subsea integrity management",
    ],
    projectLines: ["Diving & subsea", "Inspection"],
    permitCategories: ["Underwater inspection & services"],
    credentials: ["ISO 9001:2015", "NCDMB Marine Vessel Certificate"],
    showFleet: true,
    image: { src: "/images/work/dive-control.jpg", alt: "Dive supervisor at the dive control panel" },
  },
  {
    slug: "offshore-construction",
    title: "Offshore construction and installation",
    summary:
      "Offshore construction and installation by certified professionals, from pipeline lay support to FlexSteel installation and pre-commissioning.",
    intro:
      "We execute offshore construction and installation work to a high standard of quality assurance and compliance. Recent work includes engineering and installation of two 6\" FlexSteel pipelines for Antan Producing, and diving support for pipeline installation for West African Ventures and Westfield Subsea.",
    capabilities: [
      "Oil and gas pipeline laying, fabrication and construction",
      "FlexSteel pipeline engineering and installation",
      "Diving support for beach pulls, PLEMs, tie-in spools and SPM installation",
      "Concrete mattress and concrete block installation",
      "Decommissioning and pre-commissioning",
      "Installation and upgrade of offshore production facilities and platforms",
    ],
    projectLines: ["Installation support"],
    permitCategories: ["Offshore pipeline laying", "Major construction services", "Pipeline and cable laying"],
    credentials: ["ISO 9001:2015"],
    image: { src: "/images/work/installation-crew.jpg", alt: "Crew on deck preparing for an installation dive" },
  },
  {
    slug: "rope-access",
    title: "Rope access and fabric maintenance",
    summary:
      "Specialised rope access and fabric maintenance, delivering safe, efficient and cost-effective repair and inspection.",
    intro:
      "TES has provided rope access services to Chevron Nigeria since 2013. Our teams reach topside structures for inspection, repair and fabric maintenance without the time and cost of scaffolding.",
    capabilities: [
      "Rope access inspection of topside structures",
      "Repair work at height",
      "Fabric maintenance: coating and repair",
      "IRATA International operator membership",
    ],
    projectLines: ["Rope access"],
    // The NUPRC rope access permit expired 17 Sep 2026; add it back here once the renewal is supplied.
    permitCategories: [],
    credentials: ["IRATA International", "ISO 9001:2015"],
    image: { src: "/images/work/platform-deck.jpg", alt: "Crew working on deck beside a production platform" },
  },
  {
    slug: "procurement-inspection",
    title: "Procurement, inspection and expediting",
    summary:
      "Supply chain management, quality assurance and timely delivery of critical project materials and equipment.",
    intro:
      "We manage the supply of critical project materials and equipment, with quality assurance and inspection before delivery and expediting to keep deliveries on schedule.",
    capabilities: [
      "Sourcing and supply of project materials and equipment",
      "Quality assurance and inspection, topside and underwater",
      "Expediting to keep critical deliveries on schedule",
      "Equipment supply and maintenance, within our ISO 9001:2015 certified scope",
    ],
    projectLines: [],
    permitCategories: [],
    credentials: ["ISO 9001:2015"],
    image: { src: "/images/work/umbilicals.jpg", alt: "Diving umbilicals coiled and stowed on deck" },
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    summary:
      "Technical guidance and practical solutions that improve project execution and operational efficiency.",
    intro:
      "Our engineers and specialists give technical guidance on offshore and marine projects, and we supply qualified Nigerian professionals to support operators’ and contractors’ teams.",
    capabilities: [
      "Engineering services",
      "Technical advice on project execution and operational efficiency",
      "Supply of Nigerian technical professionals",
    ],
    projectLines: [],
    permitCategories: ["Technical consultancy", "Consultancy (Major category)"],
    credentials: ["ISO 9001:2015"],
    image: { src: "/images/work/dive-station.jpg", alt: "TES dive station set up on deck" },
  },
];

/** TES's closing line from the services template. */
export const servicesCommitment =
  "Our commitment to excellence means every project is executed with precision, reliability and adherence to global standards.";

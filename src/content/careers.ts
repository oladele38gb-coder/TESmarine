import { totalLtiFreeManHours } from "@/content/compliance";

/**
 * Careers page content. Drawn from TES documents (HSE policy, HSE statistics, permits, services, fleet).
 * No vacancies, benefits or pay are stated because TES has not supplied any.
 * Add openings to `openings` when TES advertises a role; the page lists them automatically.
 */

/**
 * Careers page switch. Off for now at the team lead's request (Nov 2026): the page returns 404 and is
 * removed from the footer, sitemap and privacy notice. Set to true to bring it all back.
 */
export const careersEnabled = false;

export const careersEmail = "info@tesmarine.com.ng"; // Confirm with TES whether CVs should go to a separate address.

export const whyTes = [
  {
    title: "Safety comes first",
    body: `${totalLtiFreeManHours.toLocaleString("en-GB")} man-hours worked from 2023 to 2025 without a lost-time injury, and no recordable incidents. We promote safe behaviour through a proactive Culture of Intervention.`,
  },
  {
    title: "Training and competence",
    body: "Our HSE policy commits us to train and assess every employee so they are competent for the work they do, and to consult our people on health and safety every day.",
  },
  {
    title: "Real offshore work",
    body: "Our crews work on producing fields and export terminals across the Niger Delta, including Chevron Nigeria’s Escravos operations, on our own three vessels.",
  },
  {
    title: "Nigerian talent",
    body: "We are permitted to supply Nigerian professionals to the oil and gas industry, and our fleet is Nigerian-flagged.",
  },
];

export type Discipline = { title: string; roles: string[] };

/** The kinds of people TES's services and fleet need. Not a list of open vacancies. */
export const disciplines: Discipline[] = [
  {
    title: "Diving and subsea",
    roles: ["Commercial divers", "Dive supervisors", "Dive technicians", "Underwater inspection personnel"],
  },
  {
    title: "Rope access and fabric maintenance",
    roles: ["IRATA rope access technicians (Levels 1–3)", "Coating and fabric maintenance technicians"],
  },
  {
    title: "Marine crew",
    roles: ["Masters and officers", "Marine engineers", "Deck crew", "Cooks and stewards"],
  },
  {
    title: "Offshore construction and installation",
    roles: ["Construction and installation supervisors", "Riggers and crane operators", "Welders and fabricators"],
  },
  {
    title: "Engineering and projects",
    roles: ["Project and field engineers", "QA/QC and inspection personnel", "Procurement and expediting"],
  },
  {
    title: "HSE and support",
    roles: ["HSE officers and medics", "Operations and logistics", "Finance and administration"],
  },
];

/** Certificates worth listing in an application, if held. Industry-standard; not a statement of TES's requirements. */
export const usefulCertificates = [
  "Offshore survival and emergency training (e.g. BOSIET, HUET)",
  "STCW certificates, for marine crew",
  "Commercial diving certification and dive medical",
  "IRATA rope access level",
  "Trade, welding or inspection qualifications",
];

export type Opening = { title: string; location: string; type: string; summary: string };

/** Advertised vacancies. Empty until TES supplies one. */
export const openings: Opening[] = [];

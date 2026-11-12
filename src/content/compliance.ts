/**
 * Certifications, permits and HSE facts. Source: "WEBSITE DOC" supplied by TES (Nov 2026).
 * Permit and certificate numbers, fees and signatures are deliberately not published.
 * Only permits valid on 6 Nov 2026 are listed. Check `validUntil` dates when updating.
 */

export type Credential = {
  name: string;
  issuer: string;
  detail: string;
  /** "Mon YYYY" */
  validUntil?: string;
};

export const certificationsDetailed: Credential[] = [
  {
    name: "ISO 9001:2015",
    issuer: "Bureau Veritas Certification (UKAS accredited)",
    detail:
      "Quality management system for time charter and vessel hire, manpower and inspection services (topside and underwater), equipment supply and maintenance.",
    validUntil: "Aug 2027",
  },
  {
    name: "IRATA International",
    issuer: "Industrial Rope Access Trade Association",
    detail: "Operator member (probationary), registered April 2026.",
    validUntil: "Sep 2027",
  },
  {
    name: "Bureau Veritas class",
    issuer: "Bureau Veritas Marine & Offshore",
    detail: "Smyrna classed I ✠HULL ✠MACH, supply vessel / fire-fighting ship, unrestricted navigation.",
    validUntil: "May 2028",
  },
  {
    name: "NCDMB Marine Vessel Certificate",
    issuer: "Nigerian Content Development and Monitoring Board",
    detail: "Category A, TES Crystal (diving support vessel).",
    validUntil: "Nov 2029",
  },
  {
    name: "Nigerian registry",
    issuer: "Nigerian Maritime Administration and Safety Agency (NIMASA)",
    detail: "All three vessels are Nigerian-flagged, registered in Lagos and 100% owned by TES.",
  },
];

export type Permit = { regulator: "NUPRC" | "NMDPRA"; category: string; scope: string[]; validUntil: string };

/** Oil and gas industry service permits (Specialized category unless noted). */
export const permits: Permit[] = [
  {
    regulator: "NUPRC",
    category: "Underwater inspection & services",
    scope: ["Diving services", "Underwater inspection"],
    validUntil: "Sep 2027",
  },
  {
    regulator: "NUPRC",
    category: "Offshore pipeline laying",
    scope: ["Laying of oil and gas pipelines", "Pipeline fabrication and construction"],
    validUntil: "Jun 2027",
  },
  {
    regulator: "NUPRC",
    category: "Major construction services",
    scope: ["Installation and upgrade of on/offshore production facilities and platforms", "Process facilities"],
    validUntil: "May 2027",
  },
  { regulator: "NUPRC", category: "Technical consultancy", scope: ["Engineering services"], validUntil: "Sep 2027" },
  {
    regulator: "NUPRC",
    category: "Consultancy (Major category)",
    scope: ["Nigerian manpower supply (Nigerian professionals only)"],
    validUntil: "Sep 2027",
  },
  {
    regulator: "NMDPRA",
    category: "Underwater inspection & services",
    scope: ["Subsea integrity management", "Underwater inspection in lieu of dry-docking (UWILD)"],
    validUntil: "Apr 2027",
  },
  {
    regulator: "NMDPRA",
    category: "Pipeline and cable laying",
    scope: ["Offshore laying of oil and gas pipelines"],
    validUntil: "Apr 2027",
  },
  {
    regulator: "NMDPRA",
    category: "Vessel leasing",
    scope: ["Diving support vessel"],
    validUntil: "May 2027",
  },
  // Not listed (expired or expiring 6 Nov 2026, no renewal supplied): NUPRC Rope access (exp. 17 Sep 2026),
  // Special transportation services (exp. 30 Oct 2026), Robotic underwater services / ROV and Survey (exp. 6 Nov 2026).
];

export const regulatorNames = {
  NUPRC: "Nigerian Upstream Petroleum Regulatory Commission",
  NMDPRA: "Nigerian Midstream and Downstream Petroleum Regulatory Authority",
} as const;

/** From "TES MARINE 3YR HSE STATISTICS". The sheet's "consecutive zero-LTI years: 0" row contradicts TRIR 0 and is not published. */
export const hseStats = [
  { year: "2023", manHours: 239_002, trir: 0 },
  { year: "2024", manHours: 296_744, trir: 0 },
  { year: "2025", manHours: 350_080, trir: 0 },
];

export const totalLtiFreeManHours = hseStats.reduce((sum, y) => sum + y.manHours, 0);

/** HSE policy TES-POL-01.001, signed by the Managing Director, 30 Apr 2026. Lightly edited for the web. */
export const hsePolicy = {
  statement:
    "TES Marine & Energy Services is committed to a safe, quality and healthy work environment for all employees, contractors and subcontractors. Our objective is to control risks and have zero accidents or cases of work-related ill-health.",
  ensure: [
    "The health, quality and safety of our employees, contractors and assets",
    "The protection, conservation and sustenance of our working environment",
    "Compliance with relevant HSEQ legislation and the conditions of the licences under which we operate",
    "Continuous improvement in HSEQ performance",
    "A contribution to the sustainable development of our host communities",
  ],
  through: [
    "Visible management commitment to HSEQ programmes",
    "A systematic HSEQ management approach to minimise operational risk",
    "Teamwork towards HSEQ targets",
    "Quality management auditing and competency development",
    "Training and evaluation so every employee is competent for their work",
    "A proactive “Culture of Intervention” that promotes individual safe behaviour",
    "Day-to-day consultation with employees on health and safety, with occupational health advice and supervision",
    "Procedures that prepare employees to respond to emergencies",
  ],
  closing: "No compromise to health, safety, environment or quality in our operations.",
  signedBy: "Mobolaji Shenjobi, Managing Director",
  date: "April 2026",
};

/**
 * About page content. Every statement here traces to a TES document:
 * projects doc, NIMASA registry certificates, ISO / IRATA / NCDMB certificates, permits,
 * the HSE policy (TES-POL-01.001) and the 2023–25 HSE statistics.
 * Still needed from TES (see CLAUDE.md): mission/vision, full leadership team with photos and bios,
 * CapitalCorp Group description, and their own "Our Strategy" wording.
 */

export const story = [
  "TES Marine and Energy Services Limited is a Lagos-based marine and offshore services company and a member of the CapitalCorp Group. We own and operate three Nigerian-flagged vessels and provide diving, offshore installation, rope access and technical support to operators and contractors across the Niger Delta.",
  "The company was incorporated in July 2021, but our people have been working on Chevron Nigeria’s operations since 2013, starting with rope access. Since then the work has grown to include maintenance diving at the Escravos field, FSO underwater inspections and buoy chain inspections.",
  "We have since delivered offshore work for Antan Producing, Atlantic Terminal Infrastructure, West African Ventures, Westfield Subsea, Brightwaters Energy and others, without a single lost-time injury across 2023 to 2025.",
];

/** "How we deliver": shown beside the layered diagram (Subsea 7 style). Replace with TES's own strategy wording when supplied. */
export const approach = [
  {
    title: "Our own fleet",
    body: "Smyrna, TES Crystal and TES Grace are owned outright, registered in Lagos and fitted for diving support, so we control availability, crewing and maintenance.",
  },
  {
    title: "Certified people",
    body: "Certified professionals and an IRATA International operator membership, with training and competency checks built into our HSE management system.",
  },
  {
    title: "Systems that hold us to account",
    body: "An ISO 9001:2015 quality management system certified by Bureau Veritas, and current NUPRC and NMDPRA service permits.",
  },
  {
    title: "Nigerian content",
    body: "Nigerian-flagged vessels, an NCDMB Category A Marine Vessel Certificate for TES Crystal, and a permit to supply Nigerian professionals.",
  },
];

export type Milestone = { year: string; items: string[] };

/** Dated facts only. */
export const milestones: Milestone[] = [
  { year: "2013", items: ["Our team begins providing rope access services to Chevron Nigeria."] },
  {
    year: "2021",
    items: [
      "Diving support for the Escravos Export System Project for Deltatek Offshore.",
      "TES Marine and Energy Services Limited is incorporated in July.",
      "Underwater inspection and remedial works start on the SPM pipeline tie-in at Marina Jetty for OVH Energy.",
    ],
  },
  { year: "2022", items: ["Maintenance diving services begin at Chevron Nigeria’s Escravos field."] },
  {
    year: "2023",
    items: [
      "EGTL buoy chain inspection and Escravos LPG FSO UWILD for Chevron Nigeria.",
    ],
  },
  {
    year: "2024",
    items: [
      "ISO 9001:2015 certification from Bureau Veritas.",
      "TES Crystal is registered under the Nigerian flag and receives an NCDMB Category A Marine Vessel Certificate.",
      "Diving support on a 20\" × 21 km pipeline and SPM for West African Ventures.",
    ],
  },
  {
    year: "2025",
    items: [
      "Monthly diving support begins for ATIL’s export operations at KM23 Otakikpo.",
      "TES Grace is registered under the Nigerian flag, completing a three-vessel Nigerian-flagged fleet.",
    ],
  },
  {
    year: "2026",
    items: [
      "Engineering and installation of two 6\" FlexSteel pipelines for Antan Producing.",
      "TES becomes an IRATA International operator member.",
    ],
  },
];

/** From the HSE policy TES-POL-01.001. */
export const values = [
  {
    title: "Safety first",
    body: "Our objective is zero accidents and zero cases of work-related ill-health, on every job.",
  },
  {
    title: "A culture of intervention",
    body: "We promote individual safe behaviour through a proactive Culture of Intervention, and consult our people on health and safety every day.",
  },
  {
    title: "Competence",
    body: "We train and assess our people so every employee is competent for the work they do.",
  },
  {
    title: "Quality and continuous improvement",
    body: "We audit our own work and keep improving our HSEQ performance, under an ISO 9001 certified system.",
  },
  {
    title: "Our host communities",
    body: "We protect the waters we work in and contribute to the sustainable development of the communities around our operations.",
  },
];

export type Leader = { name: string; role: string; bio?: string[]; photo?: { src: string; alt: string } };

/**
 * Role from TES's HSE policy (signed "Mobolaji Shenjobi, Managing Director").
 * Photo and background from the leadership page of sister company FUNDiT Finance
 * (fundit.com.ng/teams, Nov 2026), rewritten for TES. Add the rest of the team when supplied.
 */
export const leadership: Leader[] = [
  {
    name: "Bolaji Shenjobi",
    role: "Managing Director",
    bio: [
      "Bolaji is a chartered accountant with more than 35 years’ experience in financial services, specialising in liquidity management, strategic investment management and corporate finance.",
      "He has a track record of managing complex financial projects, developing investment strategies and putting risk management frameworks in place. He leads TES Marine & Energy as Managing Director.",
      "He holds a BA in Accounting from St. Ambrose University, Iowa, USA, and is a member of the Institute of Chartered Accountants of Nigeria. He is also an Executive Director of sister company FUNDiT Finance.",
    ],
    photo: { src: "/images/leadership/bolaji-shenjobi.jpg", alt: "Portrait of Bolaji Shenjobi" },
  },
];

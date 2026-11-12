export type ServiceLine = "Diving & subsea" | "Installation support" | "Rope access" | "Inspection";

export type Project = {
  slug: string;
  title: string;
  client: string;
  /** Display string for the period, e.g. "Feb 2025 – ongoing". */
  period: string;
  /** Sort key: start date as YYYY-MM. */
  start: string;
  ongoing: boolean;
  serviceLine: ServiceLine;
  scope: string;
  featured?: boolean;
};

/**
 * Source: "TES Marine projects.docx" supplied by TES (Nov 2026), which supersedes
 * the old site. Newest first. Scopes lightly edited for clarity.
 * Shown as non-clickable cards (TES request), so slugs are keys only.
 */
export const projects: Project[] = [
  {
    slug: "antan-adrp-adnh4-flexsteel",
    title: 'ADRP to ADNH-4 FlexSteel pipelines',
    client: "Antan Producing",
    period: "Jan – Mar 2026",
    start: "2026-01",
    ongoing: false,
    serviceLine: "Installation support",
    scope:
      'Engineering and installation of two 6" × 3.3 km oil and gas FlexSteel pipelines from ADRP to ADNH-4, with decommissioning, pre-commissioning and installation of concrete blocks.',
    featured: true,
  },
  {
    slug: "atil-otakikpo-export-lift",
    title: "Export and lift operations, KM23 Otakikpo",
    client: "Atlantic Terminal Infrastructure (ATIL)",
    // Doc says "2025, 2026". Treated as ongoing; confirm.
    period: "2025 – ongoing",
    start: "2025-01",
    ongoing: true,
    serviceLine: "Diving & subsea",
    scope: "Monthly diving support for tanker loadouts and chain inspections.",
  },
  {
    slug: "escravos-export-terminal-fso-uwild",
    title: "Escravos Export Terminal FSO UWILD",
    client: "Chevron Nigeria",
    period: "Feb 2025 – ongoing",
    start: "2025-02",
    ongoing: true,
    serviceLine: "Diving & subsea",
    // The old site and the Nov 2026 doc both repeat the LPG FSO text here. This wording only restates the
    // project title (UWILD = underwater inspection in lieu of dry-docking). Replace with the real scope from TES.
    scope: "Underwater inspection in lieu of dry-docking (UWILD) of the Escravos export terminal FSO.",
  },
  {
    slug: "escravos-anode-sleds",
    title: "Anode sled installation support",
    client: "Chevron Nigeria",
    period: "Dec 2023 – Apr 2024 and Dec 2024 – Apr 2025",
    start: "2023-12",
    ongoing: false,
    serviceLine: "Diving & subsea",
    scope: "Underwater dive support for the installation of anode sleds on selected jackets in Escravos.",
  },
  {
    slug: "wav-20in-pipeline",
    title: '20" × 23 km offshore pipeline and loading system',
    client: "West African Ventures",
    period: "2024",
    start: "2024-01",
    ongoing: false,
    serviceLine: "Installation support",
    scope:
      'Diving support for the beach pull, concrete mattresses, one 20" × 21 km pipeline, PLEM, tie-in spools and the SPM for Green Energy / ATIL.',
    featured: true,
  },
  {
    slug: "brightwaters-epwd",
    title: "EPWD Project",
    client: "Brightwaters Energy",
    period: "Feb – May 2024",
    start: "2024-02",
    ongoing: false,
    serviceLine: "Installation support",
    scope: 'Diving support for the installation of the PWD 18" pipeline, risers and tie-in spools.',
  },
  {
    slug: "project-alpha",
    // Doc reads "Dec 2024 – April 2024" (impossible); kept the old site's Dec 2023. Confirm.
    title: "Project Alpha",
    client: "Westfield Subsea",
    period: "Dec 2023 – Apr 2024",
    start: "2023-12",
    ongoing: false,
    serviceLine: "Diving & subsea",
    scope:
      'Diving support for the installation barge sea trial, concrete mattresses, and installation of two 10" × 21 km pipelines and one 8" × 5 km pipeline.',
  },
  {
    slug: "maritimex-epwd",
    title: "EPWD Project",
    client: "Maritimex Global",
    period: "Feb – Apr 2023",
    start: "2023-02",
    ongoing: false,
    serviceLine: "Installation support",
    scope:
      "Diving support for the installation of concrete mattresses and the PWD jacket with boat landing for Chevron Nigeria at Escravos.",
  },
  {
    slug: "egtl-buoy-chain-inspection",
    title: "EGTL buoy chain inspection",
    client: "Chevron Nigeria",
    period: "Feb – Mar 2023",
    start: "2023-02",
    ongoing: false,
    serviceLine: "Inspection",
    scope:
      "Disconnected the mooring chains from the buoy, transferred them to the deck of a DP2 AHT, cleaned them, performed close visual inspection, then reconnected them to the buoy.",
  },
  {
    slug: "escravos-lpg-fso-uwild",
    title: "Escravos LPG FSO UWILD",
    client: "Chevron Nigeria",
    period: "Feb – Mar 2023",
    start: "2023-02",
    ongoing: false,
    serviceLine: "Diving & subsea",
    scope: "Complete underwater inspection of the Escravos LPG FSO.",
  },
  {
    slug: "escravos-maintenance-diving",
    title: "Maintenance diving services",
    client: "Chevron Nigeria",
    period: "Mar 2022 – ongoing",
    start: "2022-03",
    ongoing: true,
    serviceLine: "Diving & subsea",
    scope: "Maintenance diving services at Chevron Nigeria's Escravos field.",
    featured: true,
  },
  {
    slug: "escravos-export-system",
    title: "Escravos Export System Project (EESP)",
    client: "Deltatek Offshore",
    period: "Feb – Jul 2021",
    start: "2021-02",
    ongoing: false,
    serviceLine: "Installation support",
    scope: "Diving support for the installation of mudmats, PLEM, PLMM, SSPR and spools for Chevron.",
  },
  {
    slug: "marina-jetty-spm",
    title: "SPM pipeline tie-in, Marina Jetty",
    client: "OVH Energy",
    // Doc shows both "2018" and "2021 – date"; confirm the start year.
    period: "2021 – ongoing",
    start: "2021-01",
    ongoing: true,
    serviceLine: "Inspection",
    scope:
      "Underwater inspection and remedial works on the submarine pipeline tie-in for the SPM facility at Marina Jetty.",
  },
  {
    slug: "chevron-rope-access",
    title: "Rope access services",
    client: "Chevron Nigeria",
    period: "2013 – ongoing",
    start: "2013-01",
    ongoing: true,
    serviceLine: "Rope access",
    scope: "Provision of rope access services.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

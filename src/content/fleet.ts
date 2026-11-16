/**
 * Fleet data. Sources (supplied by TES in "WEBSITE DOC", Nov 2026):
 * - NIMASA Certificates of Nigerian Registry (official name, IMO, call sign, year/place built, tonnage)
 * - TES spec sheets (dimensions, capacities, machinery, deck equipment)
 * - Bureau Veritas certificate of classification (TES Smyrna), NCDMB marine vessel certificate (TES Crystal)
 * Where the registry and a spec sheet disagree, the registry wins; disagreements are noted inline.
 * Deliberately left out: MMSI, official numbers, crew/manning, radio licences, survey records.
 */

export type SpecRow = { label: string; value: string };
export type SpecGroup = { title: string; rows: SpecRow[] };

export type Vessel = {
  slug: string;
  /** Registered name, as on the NIMASA certificate. */
  name: string;
  type: string;
  image: { src: string; alt: string };
  /** Short line for cards. */
  headline: string;
  summary: string;
  /** The handful of figures shown on cards and at the top of the vessel page. */
  keyFacts: SpecRow[];
  specs: SpecGroup[];
  specSheet: { href: string; sizeLabel: string };
};

export const fleet: Vessel[] = [
  {
    slug: "tes-smyrna",
    name: "TES Smyrna",
    type: "Utility and fire-fighting support vessel",
    image: { src: "/images/vessels/tes-smyrna.jpg", alt: "TES Smyrna at sea" },
    headline: "48 m utility vessel · 40 t bollard pull · 33 persons",
    summary:
      "Bureau Veritas-classed for unrestricted navigation, with Fi-Fi 1 water spray, four-point mooring, a 5 t air-winch LARS and accommodation for 33.",
    keyFacts: [
      { label: "Length overall", value: "48 m" },
      { label: "Bollard pull", value: "40 t" },
      { label: "Accommodation", value: "33 persons" },
      { label: "Built", value: "2008" },
    ],
    specs: [
      {
        title: "Registration",
        rows: [
          { label: "IMO number", value: "9416941" },
          { label: "Call sign", value: "5OWH" },
          { label: "Flag / port of registry", value: "Nigeria / Lagos" },
          { label: "Built", value: "2008, Gelibolu Shipyard, Turkey" },
          {
            label: "Class",
            value:
              "Bureau Veritas: I ✠HULL ✠MACH, Supply vessel, Fire-fighting ship / Utility vessel 1, water spraying, oil product; unrestricted navigation",
          },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Length overall", value: "48.0 m" },
          { label: "Breadth moulded", value: "12.6 m" },
          { label: "Depth", value: "5.2 m" },
          { label: "Draft", value: "4.2 m" },
          { label: "Deadweight", value: "756 t" },
          // Registry tonnage; the spec sheet says 1,025 GT / 308 NT.
          { label: "Gross / net tonnage", value: "986 / 295" },
        ],
      },
      {
        title: "Capacities",
        rows: [
          { label: "Clear deck area", value: "164 m²" },
          { label: "Deck strength", value: "5 t/m²" },
          { label: "Fuel oil", value: "240 m³" },
          { label: "Fresh water", value: "190 m³ (ship), 330 m³ (rig)" },
          { label: "Fuel / water delivery", value: "70 m³/h each" },
        ],
      },
      {
        title: "Propulsion and performance",
        rows: [
          // Registry: 2 × 1,193.6 kW (1,600 bhp) @ 1,800 rpm. The spec sheet lists the 1,600 bhp under "emergency generator" in error.
          { label: "Main engines", value: "2 × Cummins, 1,194 kW (1,600 bhp) each" },
          { label: "Propellers", value: "Twin-screw controllable pitch" },
          { label: "Bow thruster", value: "200 kW electric" },
          { label: "Speed", value: "12.5 kn max, 11.5 kn service, 10 kn economic" },
        ],
      },
      {
        title: "Deck and diving support",
        rows: [
          { label: "Bollard pull", value: "40 t" },
          { label: "Four-point mooring", value: "4 × 1,200 m × 28 mm wire, 35 t winches, 4 × 3,000 kg anchors" },
          { label: "Launch and recovery (LARS)", value: "5 t air winch" },
          { label: "Deck crane", value: "10 t at 12 m, 7 t at 14 m" },
          { label: "Tugger winches", value: "2 × 12 t" },
          { label: "Boat landing", value: "Ladder" },
        ],
      },
      {
        title: "Accommodation and safety",
        rows: [
          { label: "Accommodation", value: "33 persons, with sick bay" },
          { label: "Fire-fighting", value: "Fi-Fi 1 with water spray; monitors 1,200 m³/h, 120 m range" },
          { label: "Rescue boat", value: "5 persons, 16 kn" },
          { label: "Life rafts", value: "4 × 25 persons" },
        ],
      },
    ],
    specSheet: { href: "/fleet/smyrna-spec-sheet.pdf", sizeLabel: "PDF, 0.8 MB" },
  },
  {
    slug: "tes-crystal",
    name: "TES Crystal",
    type: "Diving support vessel",
    image: { src: "/images/vessels/tes-crystal.jpg", alt: "TES Crystal at sea" },
    headline: "49.5 m diving support vessel · four-point mooring · 32 persons",
    summary:
      "ABS-classed utility vessel set up for diving support, with a stern dive platform, 5 t air-winch LARS, four-point mooring and a 15.4 t telescopic crane. Holds an NCDMB Category A Marine Vessel Certificate.",
    keyFacts: [
      { label: "Length overall", value: "49.5 m" },
      { label: "Deck area", value: "196 m²" },
      { label: "Accommodation", value: "32 persons" },
      { label: "Built", value: "2003" },
    ],
    specs: [
      {
        title: "Registration",
        rows: [
          { label: "IMO number", value: "9287572" },
          { label: "Call sign", value: "5N2312" },
          { label: "Flag / port of registry", value: "Nigeria / Lagos" },
          { label: "Built", value: "2003, ZOMCO Shipyard, Saudi Arabia" },
          { label: "Class", value: "ABS: A1 Fire-fighting vessel Class 1, AMS" },
          { label: "Nigerian content", value: "NCDMB Marine Vessel Certificate, Category A (diving support vessel), to 2029" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Length overall", value: "49.5 m" },
          { label: "Breadth moulded", value: "11.58 m" },
          { label: "Depth", value: "4.3 m" },
          { label: "Draft", value: "3.06 m" },
          { label: "Deadweight", value: "475 t" },
          { label: "Gross / net tonnage", value: "701 / 210" },
        ],
      },
      {
        title: "Capacities",
        rows: [
          { label: "Clear deck area", value: "196 m²" },
          { label: "Deck strength", value: "2 t/m²" },
          { label: "Fuel oil", value: "219 m³" },
          { label: "Fresh water", value: "284 m³" },
          { label: "Fuel / water delivery", value: "100 m³/h each" },
        ],
      },
      {
        title: "Propulsion and performance",
        rows: [
          { label: "Main engines", value: "2 × Wärtsilä 6L20, 1,080 kW each" },
          { label: "Propellers", value: "Twin-screw controllable pitch" },
          { label: "Bow thruster", value: "261 kW (350 hp)" },
          { label: "Speed", value: "12 kn max, 10.2 kn service, 9 kn economic" },
        ],
      },
      {
        title: "Deck and diving support",
        rows: [
          { label: "Four-point mooring", value: "10 t hydraulic winches, 300 m × 32 mm wires, 5 t clump anchors" },
          { label: "Launch and recovery (LARS)", value: "5 t air winch, with stern dive platform" },
          { label: "Deck crane", value: "Telescopic, 15.4 t max SWL, 18.3 m max boom" },
          { label: "Boat landing", value: "Single ladder" },
        ],
      },
      {
        title: "Accommodation and safety",
        rows: [
          { label: "Accommodation", value: "32 persons in 10 cabins" },
          { label: "Fire-fighting", value: "Fi-Fi 1 with water spray; monitors 1,200 m³/h, 120 m range" },
          { label: "Rescue boat", value: "5 persons, 16 kn" },
          { label: "Life rafts", value: "4 × 25 persons" },
        ],
      },
    ],
    specSheet: { href: "/fleet/tes-crystal-spec-sheet.pdf", sizeLabel: "PDF, 1.3 MB" },
  },
  {
    slug: "tes-grace",
    name: "TES Grace",
    type: "Utility and dive support vessel",
    image: { src: "/images/vessels/tes-grace.jpg", alt: "TES Grace alongside" },
    headline: "34 m utility vessel · four-point mooring · 20 persons",
    summary:
      "A compact utility vessel with a 2.3 m maximum draught, a stern dive platform, 5 t air-winch LARS, four-point mooring and an 8 t knuckle-boom crane.",
    keyFacts: [
      { label: "Length overall", value: "34 m" },
      { label: "Max draft", value: "2.3 m" },
      { label: "Accommodation", value: "20 persons" },
      // Registry says 2015; the spec sheet says 2014 (engines built 2014). Confirm.
      { label: "Built", value: "2015" },
    ],
    specs: [
      {
        title: "Registration",
        rows: [
          { label: "IMO number", value: "9709374" },
          { label: "Call sign", value: "5N2519" },
          { label: "Flag / port of registry", value: "Nigeria / Lagos" },
          { label: "Built", value: "2015, Ningbo Zhen He Shipbuilding, China" },
          // Class omitted: spec sheet says "ABS A1, E, AMS" but the registry lists no classification society. Confirm before adding.
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Length overall", value: "34 m" },
          { label: "Breadth moulded", value: "8.0 m" },
          { label: "Depth", value: "3.3 m" },
          { label: "Draft", value: "1.85 m loaded, 2.3 m extreme" },
          { label: "Deadweight", value: "62.5 t" },
          { label: "Gross / net tonnage", value: "215 / 64" },
        ],
      },
      {
        title: "Capacities",
        rows: [
          { label: "Clear deck area", value: "72 m² (6 m × 12 m)" },
          { label: "Deck strength", value: "3 t/m²" },
          { label: "Fuel oil", value: "51 m³" },
          { label: "Fresh water", value: "20 m³" },
        ],
      },
      {
        title: "Propulsion and performance",
        rows: [
          // Spec sheet: 2 × Cummins K38-M, 596 kW. Registry: 2 × 576 kW. Showing make only until confirmed.
          { label: "Main engines", value: "2 × Cummins" },
          { label: "Propellers", value: "2 × four-blade fixed pitch" },
          { label: "Bow thruster", value: "75 kW" },
          { label: "Speed", value: "13 kn max, 11.5 kn service, 10 kn economic" },
        ],
      },
      {
        title: "Deck and diving support",
        rows: [
          { label: "Four-point mooring", value: "Yes, with twin electric warping windlasses" },
          { label: "Launch and recovery (LARS)", value: "5 t air winch, with stern dive platform" },
          { label: "Deck crane", value: "Knuckle boom, 8 t at 15 m" },
          { label: "Tugger winches", value: "2 × 12 t" },
        ],
      },
      {
        title: "Accommodation and safety",
        rows: [
          { label: "Accommodation", value: "20 persons, with sick bay" },
          { label: "Fire-fighting", value: "Fi-Fi 1 with water spray; water/foam monitors 50 m³/h" },
          { label: "Life rafts", value: "4 × 25 persons" },
        ],
      },
    ],
    specSheet: { href: "/fleet/tes-grace-spec-sheet.pdf", sizeLabel: "PDF, 0.6 MB" },
  },
];

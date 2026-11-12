export type Logo = { src: string; width: number; height: number };

export type Client = {
  name: string;
  /** Supplied by TES in "TES Marine projects.docx" (Nov 2026). Low-res; swap for vector files when available. */
  logo?: Logo;
};

const logo = (file: string, width: number, height: number): Logo => ({
  src: `/images/clients/${file}`,
  width,
  height,
});

/**
 * Logos: most were supplied by TES in their projects document. ExxonMobil, Shell,
 * Nigeria LNG and Oando were taken from each company's own website (Nov 2026);
 * those four come from the old site's client list, so TES should confirm they are
 * current clients and that showing their marks is approved.
 * Maritimex has no logo: no website could be found for it.
 */
export const clients: Client[] = [
  { name: "Chevron Nigeria", logo: logo("chevron-nigeria.png", 384, 98) },
  { name: "Antan Producing", logo: logo("antan-producing.png", 186, 104) },
  { name: "Atlantic Terminal Infrastructure (ATIL)", logo: logo("atil.png", 426, 67) },
  { name: "West African Ventures", logo: logo("west-african-ventures.png", 399, 102) },
  { name: "Brightwaters Energy", logo: logo("brightwaters-energy.png", 155, 112) },
  { name: "Westfield Subsea", logo: logo("westfield-subsea.png", 412, 82) },
  { name: "Deltatek Offshore", logo: logo("deltatek-offshore.png", 407, 121) },
  { name: "OVH Energy", logo: logo("ovh-energy.png", 364, 144) },
  { name: "Maritimex Global" },
  { name: "ExxonMobil", logo: logo("exxonmobil.png", 306, 80) },
  { name: "Shell", logo: logo("shell.svg", 128, 128) },
  { name: "Nigeria LNG", logo: logo("nigeria-lng.png", 363, 279) },
  { name: "Oando", logo: logo("oando.svg", 120, 41) },
];

export const clientByName = (name: string) => clients.find((c) => c.name === name);

/** Confirm with the client whether there are more. */
export const partners = ["Baola Energy", "CNS International", "Foltoks Energy Resources"];

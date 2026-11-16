export type Logo = { src: string; width: number; height: number };

export type Client = {
  name: string;
  /** Short label for tight spaces such as project card footers. Defaults to `name`. */
  short?: string;
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
  { name: "Chevron Nigeria", short: "Chevron", logo: logo("chevron-nigeria.png", 384, 98) },
  { name: "Antan Producing", short: "Antan", logo: logo("antan-producing.png", 186, 104) },
  { name: "Atlantic Terminal Infrastructure (ATIL)", short: "ATIL", logo: logo("atil.png", 426, 67) },
  { name: "West African Ventures", short: "WAV", logo: logo("west-african-ventures.png", 399, 102) },
  { name: "Brightwaters Energy", short: "Brightwaters", logo: logo("brightwaters-energy.png", 155, 112) },
  { name: "Westfield Subsea", short: "Westfield", logo: logo("westfield-subsea.png", 412, 82) },
  { name: "Deltatek Offshore", short: "Deltatek", logo: logo("deltatek-offshore.png", 407, 121) },
  { name: "OVH Energy", short: "OVH", logo: logo("ovh-energy.png", 364, 144) },
  { name: "Maritimex Global", short: "Maritimex" },
  { name: "ExxonMobil", logo: logo("exxonmobil.png", 306, 80) },
  { name: "Shell", logo: logo("shell.svg", 128, 128) },
  { name: "Nigeria LNG", logo: logo("nigeria-lng.png", 363, 279) },
  { name: "Oando", logo: logo("oando.svg", 120, 41) },
];

export const clientByName = (name: string) => clients.find((c) => c.name === name);

/**
 * Partners. Logos from each company's own website (Nov 2026): baolaenergy.com, foltoksenergy.com.
 * CNS International: no website could be confirmed (cns-international.com is an unrelated Italian
 * diving firm showing a "coming soon" page), so it shows as a name until TES supplies a logo.
 * Confirm with TES whether there are more partners, and that showing these logos is approved.
 */
export const partners: Client[] = [
  { name: "Baola Energy", logo: { src: "/images/partners/baola-energy.png", width: 191, height: 250 } },
  { name: "CNS International" },
  { name: "Foltoks Energy Resources", logo: { src: "/images/partners/foltoks-energy.jpg", width: 250, height: 146 } },
];

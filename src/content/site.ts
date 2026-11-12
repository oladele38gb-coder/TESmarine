import { totalLtiFreeManHours } from "@/content/compliance";
import { careersEnabled } from "@/content/careers";
import { projects } from "@/content/projects";

/**
 * Site-wide facts. Everything here was taken from the current tesmarine.com.ng
 * site or the brand guide. Values in [square brackets] are placeholders that
 * still need confirming with the client (see CLAUDE.md, "Open questions").
 */

export const company = {
  name: "TES Marine & Energy",
  legalName: "TES Marine and Energy Services Limited",
  tagline: "Time Charter | Diving Support | Technical & Support",
  group: "CapitalCorp Group",
  incorporated: "July 2021",
  url: "https://www.tesmarine.com.ng",
  email: "info@tesmarine.com.ng",
  phone: "+234 707 835 0830",
  phoneHref: "tel:+2347078350830",
  address: {
    street: "6 Babatunde Jose Street, off Ademola Adetokunbo",
    area: "Victoria Island",
    city: "Lagos",
    country: "Nigeria",
    mapUrl: "https://maps.app.goo.gl/6363ttMDTuF9qVxw6",
  },
  social: {
    // Real URLs still needed from the client. Leave empty to hide the icon.
    linkedin: "",
    whatsapp: "",
  },
} as const;

/** Short list for the footer badges and homepage HSE section. Full detail lives in compliance.ts. */
export const certifications = [
  { name: "ISO 9001:2015", short: "ISO 9001", detail: "Quality management, certified by Bureau Veritas" },
  { name: "IRATA International", short: "IRATA 7200/O", detail: "Rope access operator member" },
  { name: "NUPRC & NMDPRA", short: "NUPRC · NMDPRA", detail: "Permitted oil and gas service company" },
  { name: "NCDMB", short: "NCDMB", detail: "Category A Marine Vessel Certificate, TES Crystal" },
  { name: "NIMASA", short: "NIMASA", detail: "Nigerian-registered, TES-owned fleet" },
] as const;

/**
 * Footer logo tiles, one per issuing body. Logos taken from each organisation's official website (Nov 2026).
 * ISO 9001 shows the Bureau Veritas mark (the certifying body), not the ISO logo, which ISO does not allow
 * certified companies to use. TES should confirm it may display each mark before launch.
 */
export const certificationLogos = [
  { label: "ISO 9001", title: "ISO 9001:2015 certified by Bureau Veritas", src: "/images/certifications/bureau-veritas.svg", width: 111, height: 138 },
  { label: "IRATA", title: "IRATA International operator member 7200/O", src: "/images/certifications/irata.svg", width: 274, height: 175 },
  { label: "NUPRC", title: "Permitted by the Nigerian Upstream Petroleum Regulatory Commission", src: "/images/certifications/nuprc.png", width: 500, height: 500 },
  { label: "NMDPRA", title: "Permitted by the Nigerian Midstream and Downstream Petroleum Regulatory Authority", src: "/images/certifications/nmdpra.png", width: 405, height: 353 },
  { label: "NCDMB", title: "NCDMB Category A Marine Vessel Certificate (TES Crystal)", src: "/images/certifications/ncdmb.png", width: 270, height: 270 },
  { label: "NIMASA", title: "Nigerian-registered fleet (NIMASA)", src: "/images/certifications/nimasa.png", width: 90, height: 104 },
] as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Projects", href: "/projects" },
  { label: "HSE", href: "/hse" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Projects", href: "/projects" },
  { label: "HSE & sustainability", href: "/hse" },
  ...(careersEnabled ? [{ label: "Careers", href: "/careers" }] : []),
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Corporate policy", href: "/corporate-policy" },
  { label: "Terms & privacy", href: "/terms-of-service" },
];

/** Homepage key-figures strip. Update quarterly (or move to the CMS). */
export const keyFigures = [
  { value: "2013", label: "Supporting Chevron Nigeria with rope access since" },
  { value: "3", label: "Owned vessels: Smyrna, TES Crystal, TES Grace" },
  // Derived from projects.ts so it never goes stale.
  {
    value: String(projects.length),
    label: `Named offshore projects for ${new Set(projects.map((p) => p.client)).size} operators and contractors`,
  },
  // From TES's 3-year HSE statistics (885,826 hours, 2023–2025), rounded down.
  {
    value: `${Math.floor(totalLtiFreeManHours / 1000)}k+`,
    label: "Man-hours without a lost-time injury, 2023–2025",
  },
] as const;

# TES Marine & Energy website

Rebuild of https://www.tesmarine.com.ng from scratch. The old site is reference only; no code is reused.

@AGENTS.md

## Commands

- `npm run dev`: local dev server at http://localhost:3000
- `npm run build`: production build (also type-checks)
- `npm run lint`: ESLint (Next 16 removed `next lint`; `next build` no longer lints)

## Stack

- Next.js 16 (App Router, Turbopack, `cacheComponents` on), React 19, TypeScript
- Tailwind CSS v4: tokens live in `src/app/globals.css` under `@theme`, there is no `tailwind.config`
- Fonts self-hosted via `@fontsource` (imported in `src/app/layout.tsx`), so builds never call Google Fonts
- Next 16 specifics: `params` is a Promise (`await params`); use the global `PageProps<"/route">` / `LayoutProps<"/">` types; `next/image` only allows quality 75 unless `images.qualities` is set

## Layout of the code

- `src/content/*.ts`: all copy and data (company facts, services, projects, fleet, clients). Components read from here. These files are the seam for a future headless CMS (Sanity or Payload); keep data out of components.
- `src/components/layout/`: Header (client component, mobile menu), Footer, DocumentPage (policy/legal layout), DetailPageSkeleton (loading state)
- `src/components/home/`: one file per homepage section, in page order
- `src/components/ui/`: ButtonLink, SectionHeader
- `public/brand/`: logo (stacked lockup, vector, extracted from the brand guide) and icon
- `public/images/`: photos pulled from the current site (low-res web copies; replace with originals)

## Settled facts

- Public address: 6 Babatunde Jose Street, off Ademola Adetokunbo, Victoria Island, Lagos (as on the permits and ISO certificate). The NIMASA registry and IRATA certificate still show 7 Emeka Nweze Street, Lekki; do not use that on the site.

## Brand rules

- Logo: use only the stacked lockup `public/brand/tes-logo.svg` (brand guide "Logo Variation 2"). Its indigo text does not read on dark photos, so it sits on the white header bar, never directly on imagery.
- Colours come from the logo artwork, not the brand guide's colour page (that page has hex/RGB mismatches):
  - ink `#14183F` (text, dark sections), indigo `#373C99`, blue `#3473C2`, sky `#488ED3`, aqua `#BEE6F1`, mist `#EEF6FA`
  - orange `#F47C20` is the accent: primary buttons and small rules only. Orange buttons take ink text (white on orange fails contrast).
- Type: Saira (headings, stands in for Eurostile), Questrial (body, stands in for Century Gothic), Aleo 700 (small uppercase eyebrow labels, as in the guide). Swap to Eurostile/Century Gothic only if the client holds web licences.
- Voice: plain and specific. Real facts over adjectives. Brand line from the guide: "Safety is our watchword".
- Accessibility: text 4.5:1 minimum, real links/buttons, 44px touch targets, respect `prefers-reduced-motion`, hover-only reveals must also show on touch and focus.

## Design references (from the designer's Notion board)

- Hero: drone video of the TES-Crystal vessel. Currently a still photo; swap for a muted looping `<video>` (≤4 MB, photo as poster) when footage exists.
- Key figures strip directly under the hero (CMS-managed numbers, not "real-time").
- Services: tall photo cards whose write-up slides up on hover (Baker Hughes "Explore more" style).
- ESG/HSE: split layout, copy one side and a full-bleed photo the other (SLB sustainability style).
- Clients: infinite horizontal scroll. Partners: neat even row.
- Our Strategy: 3D diagram beside a list (Subsea 7 style). Belongs on the About page.
- Projects page: client/logo on the left, details on the right, per row.
- Fleet page: per vessel, name as heading, photo and short details, then an at-sea photo.
- Contact page: vertically split screen, image one half, details and form the other.
- About: remodel and add management photos.

The full written recommendations are in the "TES Marine Website Revamp — Recommendations" doc, and the approved homepage design is on the "TES Marine Website" design canvas (both in the designer's Claude account).

## Status

- Done: homepage (all sections), projects page (non-clickable cards per TES, filters by service line and status; data from TES's "TES Marine projects.docx", client logos in `public/images/clients/`), fleet index and vessel pages (specs, spec-sheet PDFs in `public/fleet/`), HSE page (policy, 2023–25 stats, certifications, permits; data in `src/content/compliance.ts`), services index and six service pages (five from TES's services template plus vessel charter), contact page (split layout, enquiry form via server action in `src/app/contact/actions.ts`, map), about page (story, figures, "How we deliver" layered diagram, milestones, values from the HSE policy, leadership; content in `src/content/about.ts`), careers page (HIDDEN for now at the team lead's request: `careersEnabled = false` in `src/content/careers.ts` makes /careers 404 and drops it from the footer, sitemap and privacy notice; set true to restore. Contents: why TES, open roles list driven by `openings` in `src/content/careers.ts`, disciplines, how to apply by email), corporate policy (HSEQ policy, quality, Nigerian content) and terms of service with privacy notice (content in `src/content/legal.ts`, layout in `src/components/layout/DocumentPage.tsx`), sticky header with mobile menu (anchors offset via `scroll-padding-top` in globals.css; sticky elements below it use `top-[76px]`/`top-28`), footer, metadata, Organization JSON-LD, sitemap, robots, icons.
- Placeholder pages: none. Branded 404 page in `src/app/not-found.tsx`.

## Next up (suggested order)

1. Move `src/content` into a headless CMS once the page set is stable.

## Open questions for the client

Do not invent these. Leave `[bracketed placeholders]` until answered.

- Vessel names: "TES Smyrna", "TES Crystal", "TES Grace" (team lead asked for a TES prefix on all three, Nov 2026). The NIMASA registry and Bureau Veritas list Smyrna without "TES"; spec tables and certificates on the site should say so if TES wants exact registry names.
- Vessel data conflicts: TES Grace year (registry 2015, spec 2014), engine power (596 vs 576 kW), class (spec says ABS, registry none; class hidden until confirmed); TES Smyrna tonnage (registry 986/295 used; spec 1,025/308) and its spec sheet lists 1,600 bhp under "emergency generator".
- Expired or expiring permits with no renewal supplied: NUPRC Rope access (exp. 17 Sep 2026), Special transportation (30 Oct 2026), ROV and Survey (6 Nov 2026). Not shown on the site. Rope access matters most, as it is a headline service.
- HSE statistics sheet says "consecutive zero-LTI years: 0" alongside TRIR 0; that row is not published.
- Real scope for "Escravos Export Terminal FSO UWILD" (the old site and TES's doc both copied the LPG FSO text; the site currently just restates the title)
- Permission to show each client's and partner's logo; full partner list. Partner logos for Baola Energy and Foltoks Energy Resources came from their own websites; CNS International has no confirmable website, so it shows as a name until TES sends a logo.
- Footer shows certification/regulator logos (`public/images/certifications/`, from each body's official site): Bureau Veritas mark for ISO 9001 (ISO's own logo is not allowed for certified firms), IRATA, NUPRC, NMDPRA, NCDMB, NIMASA. TES should confirm it may display each, especially the government regulators' emblems.
- Leadership: the About page shows Bolaji Shenjobi, Managing Director (signs the HSE policy as "Mobolaji"); photo and background taken from sister company FUNDiT Finance's site (fundit.com.ng/teams). Need the rest of the TES team, roles, bios and photos, and TES to approve his bio. Also mission/vision, a CapitalCorp Group description, and TES's own "Our Strategy" wording (the About page's "How we deliver" list is drawn from their documents as a stand-in).
- Confirm TES Crystal (Aug 2024) and TES Grace (Oct 2025) registry dates are first Nigerian registrations, as the About timeline says.
- Certificate numbers and expiry dates; any ISO or NUPRC certificates
- Logo tagline says "Technical & Support", old site says "Technical & Logistics": which is right?
- "Incorporated July 2021" vs "30 years of experience": frame as the team's combined experience
- Terms of service and privacy notice are a DRAFT written for how this site actually behaves (no analytics or cookies; Google Maps embed on Contact; Resend for form email). TES's lawyer must review them before launch, including NDPA 2023 obligations (e.g. whether TES needs to register with the NDPC). Other corporate policies (anti-bribery, code of conduct, whistleblowing) need TES's text.
- Careers: which email CVs go to (currently info@), any open vacancies, and anything TES wants to say about benefits or graduate/trainee schemes.
- Social links and WhatsApp number (the contact page shows WhatsApp automatically once `company.social.whatsapp` is set)
- Contact form email: needs a Resend account with tesmarine.com.ng verified, then `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and optionally `CONTACT_TO_EMAIL` (default info@) set on the host. See `.env.example`. Until then production shows a "please email us" error; dev logs enquiries to the console.
- One photo per service (TES said they will send them). Current service images are stand-ins from the old site.
- Original high-res photos and any drone footage. The old site's "TES-Grace sailing on sea" photo shows Cape Town (likely stock); do not use it.

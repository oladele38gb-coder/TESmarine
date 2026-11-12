# TES Marine & Energy website

A from-scratch rebuild of [tesmarine.com.ng](https://www.tesmarine.com.ng) for TES Marine and Energy Services Limited. The old site was reference only; no code is reused.

**Status (Nov 2026):** every page is built with real content. It's ready to demo, but not ready to launch: see [Before launch](#before-launch).

## Run it

Needs Node 20+ (built with Node 24).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (also type-checks). Should finish with all 27 pages prerendered |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (Next 16 no longer lints during `build`) |

### Demo tip: the contact form

The form needs an email service to send real enquiries (see [Environment variables](#environment-variables)).

- **`npm run dev`**: submitting succeeds and the enquiry is **printed in the terminal** instead of emailed. Use this for a demo.
- **`npm run build && npm start` without the env vars**: the form shows *"Sorry, the form isn't available right now. Please email…"*. That's deliberate, so visitors never think an unsent enquiry went through.

## Stack

- **Next.js 16** (App Router, Turbopack, `cacheComponents` and partial prefetching on), **React 19**, **TypeScript**
- **Tailwind CSS v4**: design tokens live in `src/app/globals.css` under `@theme`. There's no `tailwind.config`.
- Fonts self-hosted via `@fontsource` (Saira, Questrial, Aleo), so there are no Google Fonts calls.
- No database and no CMS yet. All content is typed TypeScript in `src/content/`.
- No analytics or tracking cookies. The privacy notice says so; keep it accurate if you add any.

Next 16 differs from older versions: `params` is a Promise, and there are global `PageProps<"/route">` types. Read `AGENTS.md` and the bundled docs in `node_modules/next/dist/docs/` before changing routing or data code.

## Pages

| Route | Notes |
|---|---|
| `/` | Hero, key figures, services, selected projects, fleet, HSE, client logos, call to action |
| `/about` | Story, figures, "How we deliver" diagram (SVG), milestones, values, leadership |
| `/services` + `/services/[slug]` | 6 services. Detail pages pull related projects, permits and certificates automatically |
| `/fleet` + `/fleet/[slug]` | 3 vessels with full spec tables and downloadable spec-sheet PDFs (`public/fleet/`) |
| `/projects` | 14 projects as non-clickable cards (client's request) with service and status filters |
| `/hse` | Safety record, HSEQ policy, certifications, NUPRC/NMDPRA permits |
| `/careers` | **Hidden for now** (returns 404). Flip `careersEnabled` in `src/content/careers.ts` to restore it, plus its footer, sitemap and privacy-notice entries |
| `/contact` | Split layout, enquiry form (server action + spam protection), map. `?service=<slug>` and `?vessel=<slug>` pre-fill the form |
| `/corporate-policy`, `/terms-of-service` | Policy and legal pages (terms include the privacy notice) |
| 404 | Branded `src/app/not-found.tsx` |

Also generated: `sitemap.xml`, `robots.txt`, icons, Organization JSON-LD on the homepage.

## Code layout

```
src/
  app/              routes (one folder per page), sitemap.ts, robots.ts, not-found.tsx
    contact/actions.ts   contact form server action (validation, spam checks, Resend email)
  components/
    layout/         Header (mobile menu), Footer, DocumentPage, DetailPageSkeleton
    home/           one file per homepage section, in page order
    about/ contact/ fleet/ projects/ services/   page-specific components
    ui/             ButtonLink, SectionHeader, ClientLogo
  content/          ALL copy and data. Edit these to change text (see below)
public/
  brand/            logo (SVG)
  images/           photos, client logos, leadership photo
  fleet/            vessel spec-sheet PDFs
```

### Editing content

Components only render; the words and data live in `src/content/`:

| File | Holds |
|---|---|
| `site.ts` | Company details, address, nav, certification badges, homepage key figures |
| `projects.ts` | The 14 projects (`featured: true` puts one on the homepage) |
| `services.ts` | The 6 services, their capabilities and which permits/projects they link to |
| `fleet.ts` | Vessel specs (registry certificates win where they disagree with spec sheets) |
| `clients.ts` | Client names and logos |
| `compliance.ts` | Certificates, permits (with expiry dates), HSE statistics, HSE policy |
| `about.ts`, `careers.ts`, `legal.ts` | About, Careers and policy/legal page text |

Counts on the site (projects, clients, man-hours) are calculated from these files, so they stay in sync. The files are shaped to move into a headless CMS (Sanity or Payload) later.

**Content rule:** every claim on the site traces to a document TES supplied. Comments in `src/content/` say where each fact came from and flag anything unconfirmed. Don't add facts, figures or certifications that TES hasn't provided.

## Environment variables

Copy `.env.example` to `.env.local` (local) or set these on the host:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com), used to email contact form enquiries |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `TES Website <website@tesmarine.com.ng>`. Verifying the domain needs DNS access |
| `CONTACT_TO_EMAIL` | Optional. Where enquiries go (defaults to `info@tesmarine.com.ng`) |

## Deployment

Standard Next.js app with no special runtime needs. Vercel works out of the box; any Node host running `npm run build && npm start` works too. `company.url` in `src/content/site.ts` (https://www.tesmarine.com.ng) drives canonical URLs, the sitemap and social previews, so change it for a staging domain.

The contact form's rate limit is in-memory, per server instance. On serverless hosts, add a shared limiter or Cloudflare Turnstile if spam gets through.

## Before launch

**Technical**
- [ ] Put the project under version control (it isn't a git repo yet) and push to the team's remote
- [ ] Set up Resend and the env vars above, then send a real test enquiry
- [ ] Deploy to staging and check on real phones

**Waiting on TES** (full list with detail in `CLAUDE.md` → "Open questions for the client")
- [ ] **Legal review** of the Terms of service and privacy notice (a draft written for how this site works; includes NDPA 2023 duties)
- [ ] **Expired NUPRC permits:** Rope access (expired 17 Sep 2026) and Special transportation; ROV and Survey expired 6 Nov 2026. They're hidden from the site until renewals arrive
- [ ] Real scope for the "Escravos Export Terminal FSO UWILD" project (the site currently restates the title)
- [ ] Vessel data conflicts (TES Grace year, engine power and class; Smyrna tonnage)
- [ ] Permission to show client logos, especially ExxonMobil, Shell, NLNG and Oando, which came from the old site and were taken from those companies' websites
- [ ] Rest of the leadership team (photos and bios), and sign-off on Bolaji Shenjobi's bio (adapted from sister company FUNDiT Finance's site)
- [ ] One photo per service (current ones are stand-ins), original high-res photos and any drone footage for the hero
- [ ] WhatsApp number, social links, careers email, any open vacancies

## Photos

The photos in `public/images/` are the old site's small web copies, enhanced and upscaled 2× with Apple Core Image. The rescue boat photo was AI-upscaled with Real-ESRGAN, which restores detail without changing what the photo shows. Original camera files from TES would still be better, especially for the full-screen hero. Replace any photo by saving over it with the same filename.

## Project notes

`CLAUDE.md` holds the working context: brand rules (colours, type, logo use), design references from the designer's brief, current status, and the open questions for the client.

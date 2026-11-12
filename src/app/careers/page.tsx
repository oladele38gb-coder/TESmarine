import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { careersEmail, careersEnabled, disciplines, openings, usefulCertificates, whyTes } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work offshore with TES Marine & Energy: divers, rope access technicians, marine crew, engineers and support staff across the Niger Delta.",
};

const cvHref = (role?: string) =>
  `mailto:${careersEmail}?subject=${encodeURIComponent(`Careers: ${role ?? "CV"}`)}`;

export default function Page() {
  // Hidden for now; see `careersEnabled` in src/content/careers.ts.
  if (!careersEnabled) notFound();

  return (
    <>
      {/* Intro: copy + photo */}
      <section className="bg-mist">
        <div className="container-site grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow mb-4 text-blue">Careers</p>
            <h1 className="font-display text-4xl leading-[1.1] font-light text-ink sm:text-5xl">
              Work offshore with TES
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate">
              Divers, rope access technicians, marine crew and engineers make our work possible. If you take safety
              seriously and want to do real offshore work in Nigeria, we would like to hear from you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={cvHref()}>Send your CV</ButtonLink>
              <ButtonLink href="#roles" variant="navy">
                Roles we work with
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/work/dive-station.jpg"
              alt="TES crew member at the dive station on deck"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why TES */}
      <section aria-labelledby="why-heading" className="py-20">
        <div className="container-site">
          <h2 id="why-heading" className="mb-12 font-display text-3xl font-light text-ink sm:text-4xl">
            Why work with us
          </h2>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyTes.map((w) => (
              <li key={w.title}>
                <span aria-hidden="true" className="mb-4 block h-[3px] w-10 bg-orange" />
                <h3 className="font-display text-xl font-medium text-ink">{w.title}</h3>
                <p className="mt-2 text-slate">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Open roles */}
      <section aria-labelledby="openings-heading" className="border-y border-line bg-mist py-20">
        <div className="container-site">
          <h2 id="openings-heading" className="mb-8 font-display text-3xl font-light text-ink sm:text-4xl">
            Open roles
          </h2>
          {openings.length > 0 ? (
            <ul className="flex flex-col gap-4">
              {openings.map((o) => (
                <li key={o.title}>
                  <article className="flex flex-wrap items-center justify-between gap-6 border border-line bg-white p-7">
                    <div className="min-w-0 flex-[1_1_420px]">
                      <h3 className="font-display text-2xl text-ink">{o.title}</h3>
                      <p className="mt-1 text-sm text-slate">
                        {o.location} · {o.type}
                      </p>
                      <p className="mt-3 text-slate">{o.summary}</p>
                    </div>
                    <ButtonLink href={cvHref(o.title)} size="sm">
                      Apply<span className="sr-only"> for {o.title}</span>
                    </ButtonLink>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="max-w-2xl border-l-4 border-orange bg-white p-8">
              <p className="font-display text-xl text-ink">There are no advertised vacancies right now.</p>
              <p className="mt-3 text-slate">
                You’re still welcome to send us your CV. Tell us your discipline, experience and the certificates you
                hold.
              </p>
              <a
                href={cvHref()}
                className="mt-5 inline-flex min-h-11 items-center font-display text-sm font-medium tracking-[0.06em] text-blue uppercase no-underline hover:text-indigo"
              >
                Email {careersEmail} →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Disciplines */}
      <section id="roles" aria-labelledby="roles-heading" className="py-20">
        <div className="container-site">
          <h2 id="roles-heading" className="font-display text-3xl font-light text-ink sm:text-4xl">
            Roles our work involves
          </h2>
          <p className="mt-4 mb-12 max-w-2xl text-slate">
            The kinds of people our vessels and service lines rely on. Not all of these are open at any one time.
          </p>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d) => (
              <li key={d.title} className="border border-line bg-white p-7">
                <h3 className="font-display text-xl font-medium text-ink">{d.title}</h3>
                <ul className="mt-4 flex flex-col gap-2 text-slate">
                  {d.roles.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-0.5 w-3 shrink-0 bg-orange" />
                      {r}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to apply */}
      <section aria-labelledby="apply-heading" className="bg-ink py-20 text-white">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4 text-aqua">How to apply</p>
            <h2 id="apply-heading" className="font-display text-3xl font-light sm:text-4xl">
              Send us your CV
            </h2>
            <ol className="mt-8 flex flex-col gap-5">
              {[
                `Email your CV to ${careersEmail}.`,
                "Put your discipline in the subject line, for example “Careers: Dive supervisor”.",
                "List your offshore experience and the certificates you hold, with expiry dates.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-label text-[13px] font-bold tracking-[0.1em] text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#DCEBF3]">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <ButtonLink href={cvHref()}>Email your CV</ButtonLink>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium">Certificates worth including, if you hold them</h3>
            <ul className="mt-5 flex flex-col gap-3 border-t border-white/15 pt-5">
              {usefulCertificates.map((c) => (
                <li key={c} className="flex gap-3 text-[#DCEBF3]">
                  <span aria-hidden="true" className="mt-2.5 h-0.5 w-3 shrink-0 bg-orange" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

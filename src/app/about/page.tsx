import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ApproachDiagram } from "@/components/about/ApproachDiagram";
import { CtaBand } from "@/components/home/CtaBand";
import { approach, leadership, milestones, story, values } from "@/content/about";
import { totalLtiFreeManHours } from "@/content/compliance";
import { fleet } from "@/content/fleet";
import { projects } from "@/content/projects";
import { certifications, company } from "@/content/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "TES Marine and Energy Services is a Lagos-based marine and offshore services company in the CapitalCorp Group, supporting Chevron Nigeria and other operators since 2013.",
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

export default function Page() {
  const figures = [
    { value: "2013", label: "Supporting Chevron Nigeria since" },
    { value: String(fleet.length), label: "Owned, Nigerian-flagged vessels" },
    {
      value: String(projects.length),
      label: `Projects for ${new Set(projects.map((p) => p.client)).size} clients`,
    },
    {
      value: `${Math.floor(totalLtiFreeManHours / 1000)}k+`,
      label: "Man-hours without a lost-time injury, 2023–25",
    },
  ];

  return (
    <>
      {/* Intro */}
      <section className="bg-mist pt-14 md:pt-24 pb-12 md:pb-16">
        <div className="container-site">
          <p className="eyebrow mb-4 text-blue">About us</p>
          <h1 className="max-w-4xl font-display text-[30px] leading-[1.1] font-light text-ink sm:text-5xl">
            A Nigerian marine and offshore services company, built around its own fleet and its own people
          </h1>
        </div>
      </section>

      {/* Story: copy + photo */}
      <section className="py-12 md:py-20">
        <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div className="flex flex-col gap-4 text-base text-slate sm:gap-5 sm:text-lg">
            <h2 className="font-display text-[26px] font-light text-ink sm:text-4xl">Our story</h2>
            {story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="text-base">
              Part of the <strong className="font-medium text-ink">{company.group}</strong>.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/5]">
            <Image
              src="/images/work/installation-crew.jpg"
              alt="TES crew on deck preparing for a dive beside a buoy"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Figures */}
      <section aria-label="TES in numbers" className="border-y border-line bg-white">
        <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
          {figures.map((f) => (
            <div
              key={f.label}
              className="flex flex-col-reverse border-line px-3 py-6 odd:border-r sm:py-10 lg:border-r lg:px-8 lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
            >
              <dt className="mt-2 text-sm text-slate">{f.label}</dt>
              <dd className="font-display text-[30px] font-light text-indigo sm:text-5xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How we deliver: diagram beside list */}
      <section aria-labelledby="approach-heading" className="bg-mist py-14 md:py-24">
        <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[520px]">
            <ApproachDiagram />
          </div>
          <div>
            <p className="eyebrow mb-4 text-blue">How we deliver</p>
            <h2 id="approach-heading" className="font-display text-[26px] font-light text-ink sm:text-4xl">
              Four things we control, so your scope stays on track
            </h2>
            <ol className="mt-10 flex flex-col">
              {approach.map((a, i) => (
                <li key={a.title} className="flex gap-4 border-t border-line py-5 last:border-b sm:gap-5 sm:py-6">
                  <span className="font-label text-[13px] font-bold tracking-[0.1em] text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">{a.title}</h3>
                    <p className="mt-1.5 text-slate">{a.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-heading" className="py-14 md:py-24">
        <div className="container-site">
          <h2 id="timeline-heading" className="mb-8 sm:mb-12 font-display text-[26px] font-light text-ink sm:text-4xl">
            Milestones
          </h2>
          <ol className="relative border-l-2 border-line pl-8 sm:pl-12">
            {milestones.map((m) => (
              <li key={m.year} className="relative pb-8 last:pb-0 sm:pb-12">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[41px] size-4 rounded-full border-4 border-white bg-orange ring-2 ring-line sm:-left-[57px]"
                />
                <h3 className="font-display text-2xl font-light text-indigo sm:text-3xl">{m.year}</h3>
                <ul className="mt-3 flex max-w-3xl flex-col gap-2 text-ink">
                  {m.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="bg-ink py-14 md:py-24 text-white">
        <div className="container-site">
          <p className="eyebrow mb-4 text-aqua">What we stand for</p>
          <h2 id="values-heading" className="max-w-2xl font-display text-[26px] font-light sm:text-4xl">
            Safety is our watchword
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 sm:mt-12 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {values.map((v) => (
              <li key={v.title}>
                <span aria-hidden="true" className="mb-4 block h-[3px] w-10 bg-orange" />
                <h3 className="font-display text-xl font-medium">{v.title}</h3>
                <p className="mt-2 text-[#DCEBF3]">{v.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-sm text-[#DCEBF3]">
            From our HSE policy.{" "}
            <Link href="/hse" className="text-aqua underline hover:text-white">
              Read our full HSE commitment
            </Link>
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leadership-heading" className="py-14 md:py-24">
        <div className="container-site">
          <h2
            id="leadership-heading"
            className="mb-7 sm:mb-10 font-display text-[26px] font-light text-ink sm:text-4xl"
          >
            Leadership
          </h2>
          {/* Leaders with a bio: photo beside the bio. The source photo is 234 px wide, so it is shown near that size. */}
          {leadership
            .filter((l) => l.bio)
            .map((l) => (
              <article
                key={l.name}
                className="mb-12 grid grid-cols-1 items-start gap-8 sm:grid-cols-[234px_minmax(0,1fr)] sm:gap-12"
              >
                <div className="relative aspect-[234/318] w-full max-w-[234px] overflow-hidden bg-mist">
                  {l.photo ? (
                    <Image src={l.photo.src} alt={l.photo.alt} fill sizes="234px" className="object-cover object-top" />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-full items-center justify-center font-display text-6xl font-light text-indigo"
                    >
                      {initials(l.name)}
                    </span>
                  )}
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl font-medium text-ink">{l.name}</h3>
                  <p className="mt-1 font-label text-[13px] font-bold tracking-[0.14em] text-blue uppercase">
                    {l.role}
                  </p>
                  <div className="mt-5 flex flex-col gap-4 text-slate">
                    {l.bio?.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}

          {leadership.some((l) => !l.bio) && (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leadership
                .filter((l) => !l.bio)
                .map((l) => (
                  <li key={l.name}>
                    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-mist">
                      {l.photo ? (
                        <Image
                          src={l.photo.src}
                          alt={l.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover"
                        />
                      ) : (
                        <span aria-hidden="true" className="font-display text-6xl font-light text-indigo">
                          {initials(l.name)}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-medium text-ink">{l.name}</h3>
                    <p className="text-slate">{l.role}</p>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>

      {/* Credentials strip */}
      <section aria-labelledby="creds-heading" className="border-t border-line bg-mist py-12 md:py-16">
        <div className="container-site flex flex-wrap items-center justify-between gap-8">
          <h2 id="creds-heading" className="font-display text-2xl text-ink">
            Certified and permitted
          </h2>
          <ul className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="border border-line bg-white px-3 py-1.5 text-[13px] text-ink"
                title={c.detail}
              >
                {c.short}
              </li>
            ))}
          </ul>
          <Link
            href="/hse"
            className="inline-flex min-h-11 items-center font-display text-sm font-medium tracking-[0.06em] text-blue uppercase no-underline hover:text-indigo"
          >
            Certificates and permits →
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

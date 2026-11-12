import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { ServiceCard } from "@/components/services/ServiceCard";
import { certifications } from "@/content/site";
import { services, servicesCommitment, servicesIntro } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vessel charter, subsea inspection and diving, offshore construction and installation, rope access, procurement and consultancy from TES Marine & Energy.",
};

export default function Page() {
  return (
    <>
      <section className="bg-mist pt-14 md:pt-24 pb-12 md:pb-16">
        <div className="container-site">
          <p className="eyebrow mb-4 text-blue">Services</p>
          <h1 className="max-w-3xl font-display text-[30px] leading-[1.1] font-light text-ink sm:text-5xl">
            Everything an offshore scope needs, from one crew
          </h1>
          <p className="mt-6 max-w-2xl text-slate">{servicesIntro}</p>
        </div>
      </section>

      <section className="pt-12 md:pt-16 pb-12 md:pb-20">
        <div className="container-site">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl text-ink">{servicesCommitment}</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Certifications and permits">
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
        </div>
      </section>

      <CtaBand />
    </>
  );
}

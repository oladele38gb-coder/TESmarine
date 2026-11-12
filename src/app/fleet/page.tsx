import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/home/CtaBand";
import { fleet } from "@/content/fleet";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "Smyrna, TES Crystal and TES Grace: Nigerian-flagged utility and diving support vessels owned and operated by TES Marine & Energy, available for time charter.",
};

export default function Page() {
  return (
    <>
      <section className="bg-mist pt-24 pb-16">
        <div className="container-site">
          <p className="eyebrow mb-4 text-blue">Fleet</p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] font-light text-ink sm:text-5xl">
            Owned, crewed and ready to charter
          </h1>
          <p className="mt-6 max-w-2xl text-slate">
            Three Nigerian-flagged vessels, owned outright by TES and registered in Lagos. Each has four-point mooring and
            a 5 t air-winch launch and recovery system for diving operations.
          </p>
        </div>
      </section>

      <section className="pt-16 pb-28">
        <div className="container-site flex flex-col gap-20">
          {fleet.map((v, i) => (
            <article key={v.slug} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={v.image.src} alt={v.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <p className="eyebrow mb-3 text-blue">{v.type}</p>
                <h2 className="font-display text-4xl font-medium tracking-[0.02em] text-ink uppercase">{v.name}</h2>
                <p className="mt-4 text-slate">{v.summary}</p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {v.keyFacts.map((f) => (
                    <div key={f.label} className="flex flex-col-reverse">
                      <dt className="text-sm text-slate">{f.label}</dt>
                      <dd className="font-display text-2xl whitespace-nowrap text-indigo">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={`/fleet/${v.slug}`}
                  className="mt-8 inline-flex min-h-11 items-center font-display text-sm font-medium tracking-[0.06em] text-blue uppercase no-underline hover:text-indigo"
                >
                  Full specifications<span className="sr-only"> for {v.name}</span> →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

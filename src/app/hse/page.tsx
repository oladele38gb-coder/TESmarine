import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/home/CtaBand";
import {
  certificationsDetailed,
  hsePolicy,
  hseStats,
  permits,
  regulatorNames,
  totalLtiFreeManHours,
} from "@/content/compliance";

export const metadata: Metadata = {
  title: "HSE & sustainability",
  description:
    "TES Marine & Energy's HSE policy, three-year safety record, ISO 9001:2015 certification and NUPRC and NMDPRA service permits.",
};

const fmt = (n: number) => n.toLocaleString("en-GB");

export default function Page() {
  return (
    <>
      <section className="bg-mist pt-24 pb-16">
        <div className="container-site">
          <p className="eyebrow mb-4 text-blue">HSE &amp; sustainability</p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] font-light text-ink sm:text-5xl">
            Safety is our watchword
          </h1>
          <p className="mt-6 max-w-2xl text-slate">{hsePolicy.statement}</p>
        </div>
      </section>

      {/* Safety record */}
      <section aria-labelledby="record-heading" className="py-20">
        <div className="container-site">
          <h2 id="record-heading" className="mb-3 font-display text-3xl font-light text-ink sm:text-4xl">
            Our safety record
          </h2>
          <p className="mb-10 max-w-2xl text-slate">
            {fmt(totalLtiFreeManHours)} man-hours worked from 2023 to 2025 without a lost-time injury, and no recordable
            incidents in any of those years.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-ink text-sm text-slate">
                  <th scope="col" className="py-3 pr-4 font-normal">
                    Year
                  </th>
                  <th scope="col" className="py-3 pr-4 font-normal">
                    Man-hours without a lost-time injury
                  </th>
                  <th scope="col" className="py-3 font-normal">
                    Total recordable incident rate
                  </th>
                </tr>
              </thead>
              <tbody className="font-display text-2xl text-indigo">
                {hseStats.map((y) => (
                  <tr key={y.year} className="border-b border-line">
                    <th scope="row" className="py-4 pr-4 font-normal text-ink">
                      {y.year}
                    </th>
                    <td className="py-4 pr-4">{fmt(y.manHours)}</td>
                    <td className="py-4">{y.trir}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-display text-2xl">
                  <th scope="row" className="py-4 pr-4 font-medium text-ink">
                    Total
                  </th>
                  <td className="py-4 pr-4 font-medium text-indigo">{fmt(totalLtiFreeManHours)}</td>
                  <td className="py-4 font-medium text-indigo">0</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate">
            TRIR = recordable incidents × 200,000 ÷ total man-hours.
          </p>
        </div>
      </section>

      {/* Policy: SLB-style split */}
      <section aria-labelledby="policy-heading" className="grid grid-cols-1 border-y border-line lg:grid-cols-2">
        <div className="px-5 py-20 sm:px-10 lg:py-24 lg:pr-16 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))]">
          <p className="eyebrow mb-4 text-blue">HSE policy</p>
          <h2 id="policy-heading" className="font-display text-3xl font-light text-ink sm:text-4xl">
            What we commit to
          </h2>
          <h3 className="mt-8 mb-3 font-display text-lg font-medium text-ink">We ensure</h3>
          <ul className="flex flex-col gap-2.5">
            {hsePolicy.ensure.map((item) => (
              <li key={item} className="flex gap-3 text-slate">
                <span aria-hidden="true" className="mt-2.5 h-0.5 w-4 shrink-0 bg-orange" />
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 mb-3 font-display text-lg font-medium text-ink">Through</h3>
          <ul className="flex flex-col gap-2.5">
            {hsePolicy.through.map((item) => (
              <li key={item} className="flex gap-3 text-slate">
                <span aria-hidden="true" className="mt-2.5 h-0.5 w-4 shrink-0 bg-orange" />
                {item}
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 border-l-4 border-orange pl-5">
            <p className="font-display text-xl text-ink">{hsePolicy.closing}</p>
            <footer className="mt-2 text-sm text-slate">
              {hsePolicy.signedBy}, {hsePolicy.date}
            </footer>
          </blockquote>
        </div>
        <div className="relative min-h-[420px]">
          <Image
            src="/images/work/rescue-boat.jpg"
            alt="Rescue boat being lowered from a TES vessel"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Certifications */}
      <section aria-labelledby="certs-heading" className="bg-mist py-20">
        <div className="container-site">
          <h2 id="certs-heading" className="mb-10 font-display text-3xl font-light text-ink sm:text-4xl">
            Certifications
          </h2>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certificationsDetailed.map((c) => (
              <li key={c.name} className="flex flex-col border border-line bg-white p-7">
                <h3 className="font-display text-xl font-medium text-ink">{c.name}</h3>
                <p className="mt-1 text-sm text-blue">{c.issuer}</p>
                <p className="mt-4 text-slate">{c.detail}</p>
                {c.validUntil && <p className="mt-auto pt-5 text-sm text-slate">Valid to {c.validUntil}</p>}
              </li>
            ))}
          </ul>

          <h2 className="mt-20 mb-3 font-display text-3xl font-light text-ink sm:text-4xl">Oil and gas service permits</h2>
          <p className="mb-10 max-w-2xl text-slate">
            TES holds current permits to operate as an oil and gas industry service company from both of Nigeria’s
            petroleum regulators.
          </p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {(["NUPRC", "NMDPRA"] as const).map((reg) => (
              <div key={reg}>
                <h3 className="font-display text-xl font-medium text-ink">{reg}</h3>
                <p className="mb-4 text-sm text-slate">{regulatorNames[reg]}</p>
                <ul className="border-t border-line">
                  {permits
                    .filter((p) => p.regulator === reg)
                    .map((p) => (
                      <li key={p.category} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-line py-4">
                        <div>
                          <p className="text-ink">{p.category}</p>
                          <p className="text-sm text-slate">{p.scope.join(" · ")}</p>
                        </div>
                        <p className="text-sm whitespace-nowrap text-slate">to {p.validUntil}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

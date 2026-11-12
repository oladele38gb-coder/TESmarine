import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { certifications } from "@/content/site";

/** SLB-style split: copy left, full-bleed photo right. */
export function HseSplit() {
  return (
    <section className="grid grid-cols-1 border-y border-[#E3EEF4] lg:grid-cols-2">
      <div className="flex flex-col justify-center px-5 py-24 sm:px-10 lg:py-28 lg:pr-16 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))]">
        <p className="eyebrow mb-4 text-blue">HSE &amp; sustainability</p>
        <h2 className="font-display text-4xl leading-[1.1] font-light sm:text-5xl">Safety is our watchword</h2>
        <p className="mt-6 max-w-[520px] text-slate">
          Every job starts with the same question: can it be done safely? We run an ISO 9001 quality system, work to IRATA standards offshore, invest
          in Nigerian people and suppliers, and run our vessels to protect the waters we work in.
        </p>
        <ol className="mt-8 flex flex-col gap-3.5">
          {certifications.map((c, i) => (
            <li key={c.name} className="flex items-baseline gap-3.5">
              <span className="font-display text-orange" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                {c.name}: {c.detail}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ButtonLink href="/hse" variant="navy">
            Our HSE commitment
          </ButtonLink>
        </div>
      </div>
      <div className="relative min-h-[420px] lg:min-h-[560px]">
        <Image
          src="/images/work/rescue-boat.jpg"
          alt="Rescue boat being lowered from a TES vessel"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

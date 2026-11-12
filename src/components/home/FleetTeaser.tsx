import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fleet } from "@/content/fleet";

export function FleetTeaser() {
  return (
    <section className="py-16 md:py-30">
      <div className="container-site">
        <SectionHeader
          eyebrow="Our fleet"
          title="Owned, crewed and ready to charter"
          link={{ label: "Full fleet specs", href: "/fleet" }}
        />
        <ul className="relative -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:mx-0 md:grid md:snap-none md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden md:grid-cols-3 md:gap-6">
          {fleet.map((v) => (
            <li key={v.slug} className="w-[84%] shrink-0 snap-start md:w-auto">
              <article>
                <div className="relative h-[220px] overflow-hidden sm:h-[280px]">
                  <Image
                    src={v.image.src}
                    alt={v.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 85vw"
                    className="object-cover"
                  />
                </div>
                <div className="pt-4 sm:pt-6">
                  <h3 className="font-display text-[22px] font-medium sm:text-[26px] tracking-[0.02em] uppercase">
                    {v.name}
                  </h3>
                  <p className="mt-1.5 mb-4 text-slate">{v.headline}</p>
                  <Link
                    href={`/fleet/${v.slug}`}
                    className="font-display text-[13px] font-medium tracking-[0.06em] text-blue uppercase no-underline hover:text-indigo"
                  >
                    View specs<span className="sr-only"> for {v.name}</span> →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

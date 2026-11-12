import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fleet } from "@/content/fleet";

export function FleetTeaser() {
  return (
    <section className="py-30">
      <div className="container-site">
        <SectionHeader
          eyebrow="Our fleet"
          title="Owned, crewed and ready to charter"
          link={{ label: "Full fleet specs", href: "/fleet" }}
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {fleet.map((v) => (
            <li key={v.slug}>
              <article>
                <div className="relative h-[280px] overflow-hidden">
                  <Image src={v.image.src} alt={v.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="pt-6">
                  <h3 className="font-display text-[26px] font-medium tracking-[0.02em] uppercase">{v.name}</h3>
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

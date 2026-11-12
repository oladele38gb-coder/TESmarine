import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/content/services";

const countWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

export function ServicesGrid() {
  return (
    <section className="pt-16 md:pt-32 pb-16 md:pb-30">
      <div className="container-site">
        <SectionHeader
          eyebrow="What we do"
          title={`${countWords[services.length] ?? services.length} service lines, one accountable crew`}
          link={{ label: "All services", href: "/services" }}
        />
        <ul className="relative -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="w-[84%] shrink-0 snap-start sm:w-auto">
              <ServiceCard service={s} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

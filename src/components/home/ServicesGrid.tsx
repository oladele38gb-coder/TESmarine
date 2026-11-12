import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/content/services";

const countWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

export function ServicesGrid() {
  return (
    <section className="pt-32 pb-30">
      <div className="container-site">
        <SectionHeader
          eyebrow="What we do"
          title={`${countWords[services.length] ?? services.length} service lines, one accountable crew`}
          link={{ label: "All services", href: "/services" }}
        />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

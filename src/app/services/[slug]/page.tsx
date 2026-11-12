import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/home/CtaBand";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { certificationsDetailed, permits, regulatorNames } from "@/content/compliance";
import { fleet } from "@/content/fleet";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.summary } : { title: "Services" };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = projects.filter((p) => service.projectLines.includes(p.serviceLine));
  const servicePermits = permits.filter((p) => service.permitCategories.includes(p.category));
  const creds = certificationsDetailed.filter((c) => service.credentials.includes(c.name));
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Intro: copy left, photo right */}
      <section className="bg-mist">
        <div className="container-site grid grid-cols-1 items-center gap-7 py-8 sm:gap-10 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate">
              <Link href="/services" className="text-blue hover:text-indigo">
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{service.title}</span>
            </nav>
            <h1 className="font-display text-[30px] leading-[1.1] font-light text-ink sm:text-5xl">{service.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-slate">{service.intro}</p>
            <div className="mt-10">
              <ButtonLink href={`/contact?service=${service.slug}`} className="w-full justify-center sm:w-auto">
                Discuss your scope
              </ButtonLink>
            </div>
          </div>
          <div className="relative order-first aspect-[4/3] overflow-hidden lg:order-none lg:aspect-[5/4]">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Capabilities + credentials */}
      <section className="py-12 md:py-20">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20">
          <div>
            <h2 className="mb-8 font-display text-[26px] font-light text-ink sm:text-4xl">What we do</h2>
            <ul className="grid grid-cols-1 gap-x-10 border-t border-line sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li key={c} className="flex gap-3 border-b border-line py-4 text-ink">
                  <span aria-hidden="true" className="mt-3 h-0.5 w-4 shrink-0 bg-orange" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {(creds.length > 0 || servicePermits.length > 0) && (
            <aside aria-labelledby="creds-heading" className="self-start bg-mist p-8">
              <h2 id="creds-heading" className="eyebrow mb-5 text-blue">
                Certified and permitted
              </h2>
              <ul className="flex flex-col gap-4">
                {creds.map((c) => (
                  <li key={c.name}>
                    <p className="font-display text-lg text-ink">{c.name}</p>
                    <p className="text-sm text-slate">{c.issuer}</p>
                  </li>
                ))}
                {servicePermits.map((p) => (
                  <li key={`${p.regulator}-${p.category}`}>
                    <p className="font-display text-lg text-ink">
                      {p.regulator} permit: {p.category.replace(" (Major category)", "")}
                    </p>
                    <p className="text-sm text-slate">
                      {regulatorNames[p.regulator]}, to {p.validUntil}
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/hse" className="mt-6 inline-flex min-h-11 items-center text-sm text-blue hover:text-indigo">
                All certifications and permits →
              </Link>
            </aside>
          )}
        </div>
      </section>

      {/* Fleet, for vessel-based services */}
      {service.showFleet && (
        <section aria-labelledby="fleet-heading" className="border-t border-line py-12 md:py-20">
          <div className="container-site">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-10 sm:gap-6">
              <h2 id="fleet-heading" className="font-display text-[26px] font-light text-ink sm:text-4xl">
                Our vessels
              </h2>
              <Link
                href="/fleet"
                className="inline-flex min-h-11 items-center font-display text-sm font-medium tracking-[0.06em] text-blue uppercase no-underline hover:text-indigo"
              >
                Full fleet specs →
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {fleet.map((v) => (
                <li key={v.slug}>
                  <Link href={`/fleet/${v.slug}`} className="group block no-underline">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={v.image.src}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <p className="mt-4 font-display text-xl font-medium text-ink uppercase group-hover:text-blue">
                      {v.name}
                    </p>
                    <p className="text-sm text-slate">{v.headline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <section aria-labelledby="projects-heading" className="bg-mist py-12 md:py-20">
          <div className="container-site">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-10 sm:gap-6">
              <h2 id="projects-heading" className="font-display text-[26px] font-light text-ink sm:text-4xl">
                Where we’ve done it
              </h2>
              <Link
                href="/projects"
                className="inline-flex min-h-11 items-center font-display text-sm font-medium tracking-[0.06em] text-blue uppercase no-underline hover:text-indigo"
              >
                All projects →
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Other services */}
      <section aria-labelledby="other-heading" className="border-t border-line py-12 md:py-16">
        <div className="container-site">
          <h2 id="other-heading" className="eyebrow mb-6 text-blue">
            Other services
          </h2>
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug} className="border-b border-line">
                <Link
                  href={`/services/${s.slug}`}
                  className="flex min-h-14 items-center justify-between gap-4 py-3 font-display text-lg text-ink no-underline hover:text-blue"
                >
                  {s.title}
                  <span aria-hidden="true" className="text-orange">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

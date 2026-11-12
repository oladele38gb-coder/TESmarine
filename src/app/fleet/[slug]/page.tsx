import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SpecTable } from "@/components/fleet/SpecTable";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { fleet } from "@/content/fleet";

export function generateStaticParams() {
  return fleet.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps<"/fleet/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const vessel = fleet.find((v) => v.slug === slug);
  return vessel
    ? {
        title: vessel.name,
        description: `${vessel.name}, ${vessel.type.toLowerCase()} owned by TES Marine & Energy: ${vessel.headline}. Available for time charter.`,
      }
    : { title: "Fleet" };
}

export default async function VesselPage({ params }: PageProps<"/fleet/[slug]">) {
  const { slug } = await params;
  const vessel = fleet.find((v) => v.slug === slug);
  if (!vessel) notFound();
  const others = fleet.filter((v) => v.slug !== slug);

  return (
    <>
      <section className="bg-mist">
        <div className="container-site grid grid-cols-1 items-center gap-7 py-8 sm:gap-10 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate">
              <Link href="/fleet" className="text-blue hover:text-indigo">
                Fleet
              </Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{vessel.name}</span>
            </nav>
            <p className="eyebrow mb-3 text-blue">{vessel.type}</p>
            <h1 className="font-display text-5xl font-medium tracking-[0.02em] text-ink uppercase sm:text-6xl">
              {vessel.name}
            </h1>
            <p className="mt-5 max-w-xl text-slate">{vessel.summary}</p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {vessel.keyFacts.map((f) => (
                <div key={f.label} className="flex flex-col-reverse">
                  <dt className="text-sm text-slate">{f.label}</dt>
                  <dd className="font-display text-2xl whitespace-nowrap text-indigo">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <ButtonLink href={`/contact?vessel=${vessel.slug}`} className="w-full justify-center sm:w-auto">
                Request availability
              </ButtonLink>
              <a
                href={vessel.specSheet.href}
                download
                className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[2px] border border-ink px-6 sm:w-auto font-display text-[15px] font-medium tracking-[0.06em] text-ink uppercase no-underline transition-colors hover:bg-ink hover:text-white"
              >
                Spec sheet <span className="text-[13px] font-normal normal-case">({vessel.specSheet.sizeLabel})</span>
              </a>
            </div>
          </div>
          <div className="relative order-first aspect-[4/3] overflow-hidden lg:order-none">
            <Image
              src={vessel.image.src}
              alt={vessel.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-site">
          <h2 className="mb-7 sm:mb-10 font-display text-[26px] font-light text-ink sm:text-4xl">Specifications</h2>
          <SpecTable groups={vessel.specs} />
          <p className="mt-10 text-sm text-slate">
            Figures from the vessel’s registry certificate and TES spec sheet. Confirm details for your scope with our
            operations team.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-mist py-12 md:py-16">
        <div className="container-site">
          <h2 className="eyebrow mb-6 text-blue">Also in the fleet</h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {others.map((v) => (
              <li key={v.slug}>
                <Link href={`/fleet/${v.slug}`} className="group flex items-center gap-5 bg-white p-4 no-underline">
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden">
                    <Image src={v.image.src} alt="" fill sizes="112px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-xl font-medium text-ink uppercase group-hover:text-blue">
                      {v.name}
                    </p>
                    <p className="text-sm text-slate">{v.headline}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

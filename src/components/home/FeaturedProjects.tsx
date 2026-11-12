import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { clientByName } from "@/content/clients";
import { featuredProjects, projects } from "@/content/projects";

/** Client on the left, scope on the right (per the Notion brief). */
export function FeaturedProjects() {
  return (
    <section className="bg-mist py-16 md:py-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="Selected projects"
          title="Proven on Nigeria’s busiest offshore fields"
          link={{ label: `All ${projects.length} projects`, href: "/projects" }}
        />
        <ul className="flex flex-col gap-3 sm:gap-4">
          {featuredProjects.map((p) => {
            const client = clientByName(p.client);
            return (
              <li key={p.slug}>
                <article className="grid grid-cols-1 border border-line bg-white md:grid-cols-[300px_minmax(0,1fr)]">
                  <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 md:flex-col md:items-start md:justify-center md:gap-1.5 md:border-r md:border-b-0 md:p-8">
                    {client?.logo ? (
                      <div className="flex h-12 max-w-[150px] items-center md:mb-2 md:h-20 md:max-w-[220px]">
                        <ClientLogo client={client} />
                      </div>
                    ) : (
                      <p className="font-display text-lg font-medium text-indigo md:text-[22px]">{p.client}</p>
                    )}
                    <p className="shrink-0 text-right text-[13px] text-slate md:text-left md:text-sm">{p.period}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 p-5 md:gap-8 md:p-8">
                    <div className="min-w-0 flex-[1_1_420px]">
                      <h3 className="mb-2 font-display text-xl leading-snug sm:text-2xl">{p.title}</h3>
                      <p className="text-[15px] text-slate sm:text-base">{p.scope}</p>
                    </div>
                    <span className="bg-[#E1EFF7] px-3 py-1.5 text-[12px] sm:px-3.5 sm:py-2 sm:text-[13px] tracking-[0.06em] text-indigo uppercase">
                      {p.serviceLine}
                    </span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

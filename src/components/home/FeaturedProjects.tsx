import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { clientByName } from "@/content/clients";
import { featuredProjects, projects } from "@/content/projects";

/** Client on the left, scope on the right (per the Notion brief). */
export function FeaturedProjects() {
  return (
    <section className="bg-mist py-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="Selected projects"
          title="Proven on Nigeria’s busiest offshore fields"
          link={{ label: `All ${projects.length} projects`, href: "/projects" }}
        />
        <ul className="flex flex-col gap-4">
          {featuredProjects.map((p) => {
            const client = clientByName(p.client);
            return (
            <li key={p.slug}>
              <article className="grid grid-cols-1 border border-line bg-white md:grid-cols-[300px_minmax(0,1fr)]">
                <div className="flex flex-col justify-center gap-1.5 border-b border-line p-8 md:border-r md:border-b-0">
                  {client?.logo ? (
                    <div className="mb-2 flex h-20 max-w-[220px] items-center">
                      <ClientLogo client={client} />
                    </div>
                  ) : (
                    <p className="font-display text-[22px] font-medium text-indigo">{p.client}</p>
                  )}
                  <p className="text-sm text-slate">{p.period}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-8 p-8">
                  <div className="min-w-0 flex-[1_1_420px]">
                    <h3 className="mb-2 font-display text-2xl">{p.title}</h3>
                    <p className="text-slate">{p.scope}</p>
                  </div>
                  <span className="bg-[#E1EFF7] px-3.5 py-2 text-[13px] tracking-[0.06em] text-indigo uppercase">
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

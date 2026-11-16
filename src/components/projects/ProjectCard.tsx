import { ClientLogo } from "@/components/ui/ClientLogo";
import { clientByName } from "@/content/clients";
import type { Project } from "@/content/projects";

/** Static card: TES asked for project cards that are not clickable. */
export function ProjectCard({ project: p }: { project: Project }) {
  const client = clientByName(p.client);

  return (
    <article className="flex h-full flex-col border border-line bg-white">
      <div className="flex h-24 items-center border-b border-line px-5 sm:h-32 sm:px-7">
        {client?.logo ? (
          <div className="flex h-16 max-w-[180px] items-center sm:h-20 sm:max-w-[220px]">
            <ClientLogo client={client} />
          </div>
        ) : (
          <p className="font-display text-[22px] leading-tight font-medium text-indigo">{p.client}</p>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <p className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate">
          <span>{p.period}</span>
          {p.ongoing && (
            <span className="inline-flex items-center gap-1.5 font-medium text-blue">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-orange" />
              Ongoing
            </span>
          )}
        </p>
        <h3 className="mb-3 font-display text-xl leading-snug text-ink sm:text-2xl">{p.title}</h3>
        <p className="mb-5 text-[15px] text-slate sm:mb-6 sm:text-base">{p.scope}</p>
        {/* One line: short client name left, service right. Full name stays available as a tooltip and to screen readers. */}
        <p className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5 text-[13px]">
          <span className="min-w-0 truncate text-slate" title={p.client}>
            {client?.short ?? p.client}
          </span>
          <span className="shrink-0 bg-[#E1EFF7] px-3 py-1.5 tracking-[0.06em] whitespace-nowrap text-indigo uppercase">
            {p.serviceLine}
          </span>
        </p>
      </div>
    </article>
  );
}

"use client";

import { type ReactNode, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project, ServiceLine } from "@/content/projects";

type Status = "all" | "ongoing" | "completed";

const statusOptions: { value: Status; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ongoing", label: "Ongoing" },
  { value: "completed", label: "Completed" },
];

function FilterButton({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 shrink-0 cursor-pointer border px-4 text-sm whitespace-nowrap transition-colors ${
        pressed ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-blue hover:text-blue"
      }`}
    >
      {children}
    </button>
  );
}

/** Project grid with service-line and status filters. All cards render on the server; filtering is client-side. */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [line, setLine] = useState<ServiceLine | "all">("all");
  const [status, setStatus] = useState<Status>("all");

  const lines = [...new Set(projects.map((p) => p.serviceLine))];
  const shown = projects.filter(
    (p) =>
      (line === "all" || p.serviceLine === line) &&
      (status === "all" || (status === "ongoing" ? p.ongoing : !p.ongoing)),
  );

  return (
    <>
      <div className="mb-8 flex flex-col gap-5 border-b border-line pb-6 sm:mb-10 sm:gap-6 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
        <fieldset className="min-w-0">
          <legend className="eyebrow mb-3 text-slate">Service</legend>
          <div className="relative -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
            <FilterButton pressed={line === "all"} onClick={() => setLine("all")}>
              All services
            </FilterButton>
            {lines.map((l) => (
              <FilterButton key={l} pressed={line === l} onClick={() => setLine(l)}>
                {l}
              </FilterButton>
            ))}
          </div>
        </fieldset>
        <fieldset className="min-w-0">
          <legend className="eyebrow mb-3 text-slate">Status</legend>
          <div className="relative -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {statusOptions.map((s) => (
              <FilterButton key={s.value} pressed={status === s.value} onClick={() => setStatus(s.value)}>
                {s.label}
              </FilterButton>
            ))}
          </div>
        </fieldset>
      </div>

      <p aria-live="polite" className="mb-6 text-sm text-slate">
        Showing {shown.length} of {projects.length} projects
      </p>

      {shown.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="border border-line bg-white p-10 text-center">
          <p className="mb-4 text-slate">No projects match these filters.</p>
          <FilterButton
            pressed={false}
            onClick={() => {
              setLine("all");
              setStatus("all");
            }}
          >
            Clear filters
          </FilterButton>
        </div>
      )}
    </>
  );
}

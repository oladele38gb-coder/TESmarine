import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Diving, subsea installation, inspection and rope access projects delivered by TES Marine & Energy for Chevron Nigeria and other operators and contractors since 2013.",
};

export default function Page() {
  const ongoing = projects.filter((p) => p.ongoing).length;
  const clientCount = new Set(projects.map((p) => p.client)).size;

  return (
    <>
      <section className="bg-mist pt-24 pb-16">
        <div className="container-site">
          <p className="eyebrow mb-4 text-blue">Projects</p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] font-light text-ink sm:text-5xl">
            Selected projects since 2013
          </h1>
          <p className="mt-6 max-w-2xl text-slate">
            Diving support, pipeline and subsea installation, inspection and rope access work for operators and
            contractors in the Niger Delta, from Escravos to Otakikpo.
          </p>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {[
              { value: projects.length, label: "Projects listed" },
              { value: ongoing, label: "Ongoing" },
              { value: clientCount, label: "Clients" },
              // 74.6 km: Antan 2 × 3.3, WAV 21 (doc also says 23; lower used), Westfield 2 × 21 + 5. Brightwaters length unknown.
              { value: "70+ km", label: "Pipeline installed with TES diving support" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col-reverse">
                <dt className="text-sm text-slate">{f.label}</dt>
                <dd className="font-display text-4xl font-light text-indigo">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-mist pb-28">
        <div className="container-site">
          <ProjectsExplorer projects={projects} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

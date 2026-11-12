import type { ReactNode } from "react";
import type { Block, DocSection } from "@/content/legal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  meta?: string;
  /** Groups of sections; each group gets an optional heading in the contents list. */
  groups: { heading?: string; sections: DocSection[] }[];
};

function renderBlock(block: Block, i: number) {
  if (typeof block === "string") return <p key={i}>{block}</p>;
  if ("list" in block)
    return (
      <ul key={i} className="flex flex-col gap-2.5">
        {block.list.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-3 h-0.5 w-3 shrink-0 bg-orange" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  return (
    <p key={i} className="border-l-4 border-orange pl-4 text-sm text-slate">
      {block.signed}
    </p>
  );
}

/** Long-form document layout (policies, terms): sticky contents list beside readable text. */
export function DocumentPage({ eyebrow, title, intro, meta, groups }: Props) {
  return (
    <>
      <section className="bg-mist pt-14 md:pt-24 pb-14">
        <div className="container-site">
          <p className="eyebrow mb-4 text-blue">{eyebrow}</p>
          <h1 className="max-w-3xl font-display text-[30px] leading-[1.1] font-light text-ink sm:text-5xl">{title}</h1>
          {intro && <div className="mt-6 max-w-2xl text-slate">{intro}</div>}
          {meta && <p className="mt-4 text-sm text-slate">{meta}</p>}
        </div>
      </section>

      <div className="container-site grid grid-cols-1 gap-8 py-8 lg:gap-12 md:py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
        {/* Phones: collapsible menu, so the content starts on the first screen. */}
        <details className="group border border-line bg-white lg:hidden">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 font-display text-sm font-medium tracking-widest text-ink uppercase [&::-webkit-details-marker]:hidden">
            On this page
            <span aria-hidden="true" className="text-orange transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <div className="border-t border-line px-4 py-3">
            {groups.map((g, gi) => (
              <div key={gi} className={gi > 0 ? "mt-5" : undefined}>
                {g.heading && <p className="mb-2 font-display text-sm font-medium text-ink">{g.heading}</p>}
                <ul className="flex flex-col border-l border-line">
                  {g.sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="-ml-px flex min-h-11 items-center border-l-2 border-transparent pl-4 text-sm text-slate no-underline hover:border-orange hover:text-ink"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>

        <nav
          aria-label="On this page"
          className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto"
        >
          <p className="eyebrow mb-4 text-slate">On this page</p>
          {groups.map((g, gi) => (
            <div key={gi} className={gi > 0 ? "mt-5" : undefined}>
              {g.heading && <p className="mb-2 font-display text-sm font-medium text-ink">{g.heading}</p>}
              <ul className="flex flex-col border-l border-line">
                {g.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px flex min-h-9 items-center border-l-2 border-transparent pl-4 text-sm text-slate no-underline hover:border-orange hover:text-ink"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <article className="max-w-3xl">
          {groups.map((g, gi) => (
            <div key={gi} className={gi > 0 ? "mt-12 border-t border-line pt-12 md:mt-16 md:pt-16" : undefined}>
              {g.heading && (
                <h2 className="mb-7 sm:mb-10 font-display text-[26px] font-light text-ink sm:text-4xl">{g.heading}</h2>
              )}
              {g.sections.map((s, si) => {
                // With a group heading, sections nest one level below it.
                const Heading = g.heading ? "h3" : "h2";
                return (
                  <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className={si > 0 ? "mt-12" : undefined}>
                    <Heading id={`${s.id}-h`} className="font-display text-2xl text-ink">
                      {s.title}
                    </Heading>
                    <div className="mt-5 flex flex-col gap-4 leading-[1.7] text-ink/90">
                      {s.blocks.map(renderBlock)}
                    </div>
                  </section>
                );
              })}
            </div>
          ))}
        </article>
      </div>
    </>
  );
}

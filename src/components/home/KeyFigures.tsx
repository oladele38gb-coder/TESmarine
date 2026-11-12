import { keyFigures } from "@/content/site";

export function KeyFigures() {
  return (
    <section aria-label="Key figures" className="relative z-10 -mt-24">
      <div className="container-site">
        <dl className="grid grid-cols-1 border-t-4 border-sky bg-white shadow-[0_24px_60px_rgba(20,24,63,0.14)] sm:grid-cols-2 lg:grid-cols-4">
          {keyFigures.map((fig) => (
            <div
              key={fig.label}
              className="flex flex-col-reverse border-b border-[#E3EEF4] px-8 py-9 last:border-b-0 sm:odd:border-r lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <dt className="mt-3 text-[15px] text-slate">{fig.label}</dt>
              <dd className="font-display text-[56px] leading-none font-light text-indigo">{fig.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

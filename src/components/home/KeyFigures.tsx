import { keyFigures } from "@/content/site";

export function KeyFigures() {
  return (
    <section aria-label="Key figures" className="relative z-10 -mt-16 md:-mt-24">
      <div className="container-site">
        <dl className="grid grid-cols-2 border-t-4 border-sky bg-white shadow-[0_24px_60px_rgba(20,24,63,0.14)] lg:grid-cols-4">
          {keyFigures.map((fig) => (
            <div
              key={fig.label}
              className="flex flex-col-reverse justify-end border-b border-[#E3EEF4] px-4 py-6 odd:border-r sm:px-8 sm:py-9 [&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <dt className="mt-2 text-[13px] leading-snug text-slate sm:mt-3 sm:text-[15px]">{fig.label}</dt>
              <dd className="font-display text-[34px] leading-none sm:text-[56px] font-light text-indigo">
                {fig.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

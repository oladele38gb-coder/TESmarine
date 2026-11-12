import { ButtonLink } from "@/components/ui/ButtonLink";
import { company } from "@/content/site";

export function CtaBand() {
  return (
    <section className="bg-indigo py-16 md:py-26 text-white">
      <div className="container-site flex flex-wrap items-center justify-between gap-8 md:gap-10">
        <div className="max-w-[680px]">
          <h2 className="font-display text-[30px] leading-[1.1] font-light sm:text-5xl">
            Have a project offshore? Let’s talk.
          </h2>
          <p className="mt-4 text-base text-[#DCEBF3] sm:text-lg">
            Tell us the scope, location and dates. We reply within one working day.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <ButtonLink href="/contact" className="w-full justify-center sm:w-auto">
            Start an enquiry
          </ButtonLink>
          <ButtonLink href={company.phoneHref} variant="ghost" className="w-full justify-center sm:w-auto">
            {company.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

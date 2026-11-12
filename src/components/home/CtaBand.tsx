import { ButtonLink } from "@/components/ui/ButtonLink";
import { company } from "@/content/site";

export function CtaBand() {
  return (
    <section className="bg-indigo py-26 text-white">
      <div className="container-site flex flex-wrap items-center justify-between gap-10">
        <div className="max-w-[680px]">
          <h2 className="font-display text-4xl leading-[1.1] font-light sm:text-5xl">Have a project offshore? Let’s talk.</h2>
          <p className="mt-4 text-lg text-[#DCEBF3]">Tell us the scope, location and dates. We reply within one working day.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">Start an enquiry</ButtonLink>
          <ButtonLink href={company.phoneHref} variant="ghost">
            {company.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

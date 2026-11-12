import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { mainNav } from "@/content/site";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-mist py-16 md:py-32">
      <div className="container-site max-w-3xl">
        <p className="eyebrow mb-4 text-blue">404</p>
        <h1 className="font-display text-[30px] leading-[1.1] font-light text-ink sm:text-5xl">
          We couldn’t find that page
        </h1>
        <p className="mt-6 text-slate">It may have moved since our new website launched. Try one of these instead:</p>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="inline-flex min-h-11 items-center text-blue hover:text-indigo">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/" variant="navy">
            Back to the homepage
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

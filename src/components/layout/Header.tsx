"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { company, mainNav } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3EEF4] bg-white">
      <div className="container-site flex min-h-16 items-center justify-between gap-6 py-2 lg:min-h-[76px]">
        <Link href="/" aria-label={`${company.name} home`} className="shrink-0">
          <Image
            src="/brand/tes-logo.svg"
            alt={`${company.name}: ${company.tagline}`}
            width={448}
            height={121}
            priority
            className="h-11 w-auto lg:h-[52px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="text-[15px] text-ink no-underline hover:text-blue aria-[current=page]:text-blue"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" variant="navy" size="sm">
            Request a service
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-[#E3EEF4] bg-white lg:hidden"
        >
          <ul className="container-site flex flex-col py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className="block py-3 text-lg text-ink no-underline hover:text-blue">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <ButtonLink href="/contact" variant="navy" onClick={close}>
                Request a service
              </ButtonLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

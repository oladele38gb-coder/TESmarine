import Image from "next/image";
import Link from "next/link";
import { certificationLogos, company, footerNav, legalNav } from "@/content/site";

export function Footer() {
  const year = 2026; // Static so pages stay fully prerendered; update yearly or compute at build.
  const { address, social } = company;

  return (
    <footer className="bg-mist pt-14 md:pt-22 pb-10">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          <div>
            <Image
              src="/brand/tes-logo.svg"
              alt={company.name}
              width={448}
              height={121}
              className="h-12 w-auto sm:h-16"
            />
            <p className="mt-6 text-[15px] text-slate">
              An upstream oil and gas services company and member of the {company.group}.
            </p>
          </div>

          <div>
            <h2 className="mb-4.5 font-display text-sm font-medium tracking-widest uppercase">Company</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[15px] sm:flex sm:flex-col sm:gap-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink no-underline hover:text-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4.5 font-display text-sm font-medium tracking-widest uppercase">Contact</h2>
            <address className="flex flex-col gap-2.5 text-[15px] not-italic">
              <a
                href={address.mapUrl}
                className="text-ink no-underline hover:text-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                {address.street}, {address.area}, {address.city}
              </a>
              <a href={`mailto:${company.email}`} className="text-ink hover:text-blue">
                {company.email}
              </a>
              <a href={company.phoneHref} className="text-ink hover:text-blue">
                {company.phone}
              </a>
            </address>
            {(social.linkedin || social.whatsapp) && (
              <div className="mt-6 flex gap-3">
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label="TES Marine on LinkedIn"
                    className="inline-flex size-11 items-center justify-center rounded-[2px] bg-ink text-white hover:bg-indigo"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                )}
                {social.whatsapp && (
                  <a
                    href={social.whatsapp}
                    aria-label="Message TES Marine on WhatsApp"
                    className="inline-flex size-11 items-center justify-center rounded-[2px] bg-ink text-white hover:bg-indigo"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <section aria-labelledby="footer-certs" className="mt-14 border-t border-line pt-10">
          <h2 id="footer-certs" className="mb-5 font-display text-sm font-medium tracking-widest uppercase">
            Certified &amp; licensed
          </h2>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {certificationLogos.map((c) => (
              <li
                key={c.label}
                title={c.title}
                className="flex flex-col items-center justify-between gap-2 border border-[#D6E6EF] bg-white px-3 pt-4 pb-2.5"
              >
                <Image
                  src={c.src}
                  alt={c.title}
                  width={c.width}
                  height={c.height}
                  className="h-14 w-auto max-w-full object-contain"
                />
                <span className="text-xs font-medium tracking-wide text-slate">{c.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm text-slate">
          <span>
            © {year} {company.legalName}
          </span>
          <span className="flex gap-6">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate hover:text-ink">
                {item.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

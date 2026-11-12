import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact TES Marine & Energy about vessel charter, diving, offshore installation or rope access. ${company.phone}, ${company.email}.`,
};

const fullAddress = `${company.address.street}, ${company.address.area}, ${company.address.city}, ${company.address.country}`;
const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

/** Vertically split screen (per the design brief): photo one half, details and form the other. */
export default function Page() {
  const whatsapp = company.social.whatsapp;

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 sm:h-80 lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-tes-crystal.jpg"
              alt="TES Crystal at sea"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,63,0.15)_40%,rgba(20,24,63,0.85)_100%)]"
            />
            <p className="absolute inset-x-0 bottom-0 hidden p-10 font-display text-3xl leading-tight font-light text-white lg:block xl:p-14">
              Safety is our watchword.
            </p>
          </div>
        </div>

        <div className="px-5 py-12 md:py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
          <p className="eyebrow mb-4 text-blue">Contact</p>
          <h1 className="font-display text-[30px] leading-[1.1] font-light text-ink sm:text-5xl">
            Tell us about your scope
          </h1>
          <p className="mt-5 max-w-xl text-slate">
            Vessel charter, diving, installation or rope access: send us the details and the right person will get back
            to you within one working day.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-line py-8 xl:grid-cols-2">
            <div>
              <dt className="eyebrow mb-1.5 text-slate">Call</dt>
              <dd>
                <a
                  href={company.phoneHref}
                  className="inline-flex min-h-11 items-center font-display text-xl text-ink hover:text-blue"
                >
                  {company.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-1.5 text-slate">Email</dt>
              <dd>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex min-h-11 items-center font-display text-xl whitespace-nowrap text-ink hover:text-blue"
                >
                  {company.email}
                </a>
              </dd>
            </div>
            {whatsapp && (
              <div>
                <dt className="eyebrow mb-1.5 text-slate">WhatsApp</dt>
                <dd>
                  <a
                    href={whatsapp}
                    className="inline-flex min-h-11 items-center font-display text-xl text-ink hover:text-blue"
                  >
                    Message us
                  </a>
                </dd>
              </div>
            )}
            <div className="xl:col-span-2">
              <dt className="eyebrow mb-1.5 text-slate">Office</dt>
              <dd className="text-ink">
                <address className="not-italic">{fullAddress}</address>
                <a
                  href={company.address.mapUrl}
                  className="mt-1 inline-flex min-h-11 items-center text-sm text-blue hover:text-indigo"
                >
                  Open in Google Maps →
                </a>
              </dd>
            </div>
          </dl>

          <h2 className="mt-12 mb-6 font-display text-2xl text-ink">Send an enquiry</h2>
          <EnquiryForm />
        </div>
      </section>

      <section aria-label="Office location map" className="border-t border-line">
        <iframe
          title={`Map showing the TES office at ${fullAddress}`}
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[360px] w-full border-0"
        />
      </section>
    </>
  );
}

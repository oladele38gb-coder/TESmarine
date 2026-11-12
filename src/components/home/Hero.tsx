import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Still image for now. When the TES Crystal drone footage arrives, replace the
 * <Image> with a muted, looping <video> (≤4 MB, with this image as its poster).
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-end overflow-hidden bg-ink lg:min-h-[760px]">
      <Image
        src="/images/hero-tes-crystal.jpg"
        alt="TES Crystal at sea"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_50%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,24,63,0.92)_0%,rgba(20,24,63,0.72)_45%,rgba(20,24,63,0.2)_100%)]"
      />
      <div className="container-site relative pt-28 pb-40 lg:pt-32 lg:pb-44">
        <p className="eyebrow mb-6 text-aqua">Time charter · Diving support · Technical support</p>
        <h1 className="max-w-[820px] font-display text-[40px] leading-[1.06] font-light tracking-[-0.01em] text-white sm:text-[56px] lg:text-[68px]">
          Vessels, divers and rope access crews for Nigeria’s offshore energy sector
        </h1>
        <p className="mt-7 max-w-[600px] text-lg text-[#DCEBF3] sm:text-[19px]">
          A marine and offshore services company whose team has supported Chevron Nigeria since 2013. ISO 9001:2015
          certified, permitted by NUPRC and NMDPRA, and an IRATA member.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Request a service</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Our services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

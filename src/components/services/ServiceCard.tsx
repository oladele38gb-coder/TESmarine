import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

/**
 * Tall photo card; the summary slides up on hover or keyboard focus (Baker Hughes style).
 * On touch devices (no hover) the summary is always shown.
 */
export function ServiceCard({ service: s, sizes }: { service: Service; sizes: string }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group relative block h-[420px] overflow-hidden rounded-[2px] text-white no-underline lg:h-[500px]"
    >
      <Image
        src={s.image.src}
        alt={s.image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,63,0)_30%,rgba(20,24,63,0.94)_100%)]"
      />
      <span className="absolute inset-x-0 bottom-0 p-7">
        <span className="mb-4.5 block h-[3px] w-10 bg-orange transition-[width] duration-400 group-hover:w-18" />
        <span className="block font-display text-[26px] leading-[1.15]">{s.title}</span>
        <span className="grid grid-rows-[1fr] opacity-100 transition-all duration-450 [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:opacity-100">
          <span className="overflow-hidden">
            <span className="block pt-3.5 text-[15px] leading-[1.55] text-[#DCEBF3]">{s.summary}</span>
            <span className="block pt-3.5 font-display text-[13px] tracking-[0.08em] text-orange uppercase">
              Explore →
            </span>
          </span>
        </span>
      </span>
    </Link>
  );
}

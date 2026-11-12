import { ClientLogo } from "@/components/ui/ClientLogo";
import { clients, partners } from "@/content/clients";

/**
 * Infinite horizontal scroll (per the Notion brief). The list is rendered twice
 * and translated by -50% so the loop is seamless. Pauses on hover; under
 * reduced motion the logos simply wrap. The section is white so client logos
 * (mostly dark artwork on transparent or white grounds) sit directly on it, with no tiles.
 */
export function ClientMarquee() {
  return (
    <section aria-labelledby="clients-heading" className="border-t border-line bg-white py-14 md:py-24 text-ink">
      <div className="container-site">
        <h2 id="clients-heading" className="eyebrow mb-12 text-center text-blue">
          Trusted by operators and contractors
        </h2>
      </div>

      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-8 motion-reduce:px-5">
          {clients.map((c) => (
            <li key={c.name} className="flex h-20 w-48 shrink-0 items-center justify-center text-center">
              <ClientLogo client={c} area={6000} maxWidth={176} maxHeight={60} loading="eager" />
            </li>
          ))}
          {clients.map((c) => (
            <li
              key={`dup-${c.name}`}
              aria-hidden="true"
              className="flex h-20 w-48 shrink-0 items-center justify-center text-center motion-reduce:hidden"
            >
              <ClientLogo client={c} area={6000} maxWidth={176} maxHeight={60} loading="eager" />
            </li>
          ))}
        </ul>
      </div>

      <div className="container-site">
        <div className="mt-18 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-t border-line pt-10">
          <h3 className="eyebrow text-blue">Partners</h3>
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-3 font-display text-xl text-ink">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

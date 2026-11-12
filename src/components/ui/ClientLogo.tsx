import Image from "next/image";
import type { Client } from "@/content/clients";

type Props = {
  client: Client;
  /** Target visual area in px². Each logo is scaled to roughly this area so wide and square marks look equally weighted. */
  area?: number;
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
  /** Use "eager" where logos move into view (the marquee) so they never pop in late. */
  loading?: "lazy" | "eager";
};

/**
 * A client's logo, or its name when no logo is on file. Logos are dark artwork
 * on transparent/white grounds, so callers place this on a white surface.
 */
export function ClientLogo({ client, area = 9000, maxWidth = 220, maxHeight = 64, className = "", loading }: Props) {
  if (!client.logo) {
    return <span className={`font-display text-lg leading-tight font-medium text-ink ${className}`}>{client.name}</span>;
  }

  // Equal-area sizing, then clamp to the slot.
  const ratio = client.logo.width / client.logo.height;
  let w = Math.sqrt(area * ratio);
  let h = w / ratio;
  if (w > maxWidth) [w, h] = [maxWidth, maxWidth / ratio];
  if (h > maxHeight) [w, h] = [maxHeight * ratio, maxHeight];

  return (
    <Image
      src={client.logo.src}
      width={client.logo.width}
      height={client.logo.height}
      alt={client.name}
      loading={loading}
      style={{ width: Math.round(w), height: Math.round(h) }}
      className={`max-w-full object-contain ${className}`}
    />
  );
}

import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "orange" | "navy" | "ghost";

const variants: Record<Variant, string> = {
  orange: "bg-orange text-ink hover:bg-orange-bright",
  navy: "bg-ink text-white hover:bg-indigo",
  ghost: "border border-white/70 text-white hover:bg-white/10",
};

type Props = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: "md" | "sm";
};

/** A link styled as a button. Use for navigation; use <button> for actions. */
export function ButtonLink({ variant = "orange", size = "md", className = "", ...props }: Props) {
  const sizing = size === "sm" ? "min-h-11 px-5 text-[13px]" : "min-h-12 px-6 text-[15px]";
  return (
    <Link
      className={`inline-flex items-center gap-2.5 rounded-[2px] font-display font-medium uppercase tracking-[0.06em] no-underline transition-colors ${sizing} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

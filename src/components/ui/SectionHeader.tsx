import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  link?: { label: string; href: string };
};

export function SectionHeader({ eyebrow, title, link }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-12 sm:gap-8">
      <div className="max-w-[640px]">
        <p className="eyebrow mb-4 text-blue">{eyebrow}</p>
        <h2 className="font-display text-[30px] leading-[1.1] font-light text-ink sm:text-5xl">{title}</h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className="inline-flex min-h-11 items-center font-display text-sm font-medium tracking-[0.06em] text-blue uppercase no-underline hover:text-indigo"
        >
          {link.label} →
        </Link>
      )}
    </div>
  );
}

import type { LinkSection } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Links({
  links,
  title,
}: {
  links: LinkSection;
  title: string;
}) {
  return (
    <section>
      <SectionLabel>{title}</SectionLabel>
      <div className="flex flex-wrap items-center gap-4">
        {links.items.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-b from-gold-bright to-gold px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-ink transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(232,181,99,0.35)]"
          >
            {link.label}
          </a>
        ))}
        {links.note ? (
          <p className="text-xs leading-[1.7] text-faint">{links.note}</p>
        ) : null}
      </div>
    </section>
  );
}

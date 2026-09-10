import type { Interest } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Interests({
  interests,
  title,
}: {
  interests: Interest[];
  title: string;
}) {
  return (
    <section>
      <SectionLabel>{title}</SectionLabel>
      <ul className="flex flex-wrap gap-2.5">
        {interests.map((interest) => (
          <li
            key={interest.label}
            className="inline-flex items-baseline gap-2 whitespace-nowrap rounded-full border border-gold/[0.28] bg-foreground/[0.06] px-[18px] py-2.5 font-serif text-[15px] text-foreground transition-colors hover:border-gold-bright"
          >
            {interest.label}
            {interest.note ? (
              <span className="font-sans text-[11px] text-subtle">
                {interest.note}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

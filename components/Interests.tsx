import type { Interest } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Interests({ interests }: { interests: Interest[] }) {
  return (
    <section>
      <SectionLabel>Interests</SectionLabel>
      <ul className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <li
            key={interest.label}
            className="flex items-baseline gap-2 border border-rule bg-surface px-4 py-2 transition-colors hover:border-neon-alt"
          >
            <span aria-hidden="true" className="font-mono text-xs text-neon-alt">
              ▸
            </span>
            <span className="text-sm">{interest.label}</span>
            {interest.note ? (
              <span className="font-mono text-xs text-faint">
                {interest.note}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

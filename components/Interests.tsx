import type { Interest } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Interests({ interests }: { interests: Interest[] }) {
  return (
    <section>
      <SectionLabel>Interests</SectionLabel>
      <ul className="flex flex-col gap-3">
        {interests.map((interest) => (
          <li key={interest.label} className="flex flex-wrap items-baseline gap-x-3">
            <span>{interest.label}</span>
            {interest.note ? (
              <span className="text-sm text-faint">{interest.note}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

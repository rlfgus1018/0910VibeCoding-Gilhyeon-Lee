import type { Link } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Links({ links }: { links: Link[] }) {
  return (
    <section>
      <SectionLabel>Links</SectionLabel>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

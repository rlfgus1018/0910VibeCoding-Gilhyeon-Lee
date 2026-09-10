import type { Link } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Links({ links }: { links: Link[] }) {
  return (
    <section>
      <SectionLabel>Links</SectionLabel>
      <ul className="flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-rule px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-neon hover:text-neon hover:shadow-[0_0_20px_-6px_var(--neon)]"
            >
              <span aria-hidden="true" className="text-faint group-hover:text-neon-alt">
                [
              </span>
              {link.label}
              <span aria-hidden="true" className="text-faint group-hover:text-neon-alt">
                ]
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

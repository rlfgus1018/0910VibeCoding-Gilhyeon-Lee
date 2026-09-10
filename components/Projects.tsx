import type { Project } from "@/types/content";
import SectionLabel from "./SectionLabel";

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function Projects({
  projects,
  title,
}: {
  projects: Project[];
  title: string;
}) {
  return (
    <section>
      <SectionLabel>{title}</SectionLabel>
      <div className="grid gap-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="flex items-center gap-[18px] border border-gold/20 bg-gradient-to-r from-gold/[0.09] to-transparent px-5 py-[18px] transition-colors hover:border-gold-bright/85 hover:from-gold/[0.18] hover:to-gold/[0.02]"
          >
            <div
              aria-hidden="true"
              className="flex size-8 flex-none rotate-45 items-center justify-center border border-gold"
            >
              <span className="-rotate-45 font-display text-xs font-semibold text-gold-bright">
                {NUMERALS[index] ?? index + 1}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-lg font-bold leading-[1.3] text-foreground">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold-bright"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mt-1 text-sm leading-[1.7] text-subtle">
                {project.description}
              </p>
            </div>

            <span className="flex-none font-display text-[10px] leading-none tracking-[0.18em] text-fainter">
              {project.period ?? "—"}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

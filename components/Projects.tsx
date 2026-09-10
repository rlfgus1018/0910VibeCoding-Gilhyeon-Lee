import type { Project } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <SectionLabel>Projects</SectionLabel>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li
            key={project.name}
            className="group border-l-2 border-rule py-1 pl-5 transition-colors hover:border-neon hover:bg-neon/5"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-mono text-sm tracking-wide transition-colors group-hover:text-neon">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-neon"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              {project.period ? (
                <span className="font-mono text-xs text-faint">
                  {project.period}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import type { Project } from "@/types/content";
import SectionLabel from "./SectionLabel";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <SectionLabel>Projects</SectionLabel>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li key={project.name}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-medium">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              {project.period ? (
                <span className="text-xs text-faint">{project.period}</span>
              ) : null}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

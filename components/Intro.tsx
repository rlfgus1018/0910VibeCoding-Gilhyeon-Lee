import type { Profile } from "@/types/content";

export default function Intro({ profile }: { profile: Profile }) {
  return (
    <section>
      <h1
        data-text={profile.name}
        className="glitch text-5xl font-bold tracking-tight sm:text-6xl"
      >
        {profile.name}
      </h1>
      <p className="mt-5 flex items-baseline gap-2 font-mono text-sm text-muted">
        <span aria-hidden="true" className="text-neon-alt">
          &gt;
        </span>
        {profile.affiliation}
      </p>
      <p className="cursor mt-10 text-lg leading-relaxed text-foreground">
        {profile.tagline}
      </p>
      <div className="mt-5 flex flex-col gap-3 leading-relaxed text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

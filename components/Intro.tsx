import type { Profile } from "@/types/content";

export default function Intro({ profile }: { profile: Profile }) {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-muted">{profile.affiliation}</p>
      <p className="mt-8 text-lg leading-relaxed">{profile.tagline}</p>
      <div className="mt-4 flex flex-col gap-3 leading-relaxed text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

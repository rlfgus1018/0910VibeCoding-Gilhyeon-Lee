import type { Profile } from "@/types/content";

export default function Intro({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div aria-hidden="true" className="lantern" />

      <p className="mt-[26px] font-display text-[11px] uppercase leading-none tracking-[0.5em] text-gold-dim">
        {profile.house}
      </p>

      <h1 className="mt-[18px] font-serif text-[clamp(48px,10vw,60px)] font-bold leading-[1.04] tracking-[0.01em] text-foreground [text-shadow:0_0_38px_rgba(255,168,60,0.26)]">
        {profile.name}
      </h1>

      <p className="mt-4 font-display text-[13px] leading-[1.4] tracking-[0.22em] text-gold">
        {profile.affiliationLatin}
      </p>
      <p className="mt-1 text-sm leading-[1.6] text-gold-dim">
        {profile.affiliation}
      </p>

      <p className="ember mt-[30px] max-w-[30em] text-lg leading-[1.85] text-pretty text-cream">
        {profile.tagline}
      </p>

      <div className="mt-5 flex max-w-[32em] flex-col gap-4">
        {profile.about.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-[1.9] text-pretty text-muted"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="mt-[34px] flex w-full max-w-[320px] items-center gap-3"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
      </div>
    </header>
  );
}

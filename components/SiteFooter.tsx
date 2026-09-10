import type { Profile } from "@/types/content";

export default function SiteFooter({ profile }: { profile: Profile }) {
  return (
    <footer className="flex flex-col items-center gap-2.5 border-t border-gold/[0.16] pt-6">
      <p className="font-fell text-[17px] italic leading-none text-faint">
        {profile.nameLatin}
      </p>
      <p className="font-display text-[10px] leading-none tracking-[0.28em] text-fainter">
        {profile.affiliationLatinFull}
      </p>
    </footer>
  );
}

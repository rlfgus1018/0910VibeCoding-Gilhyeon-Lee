export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[22px] flex items-center gap-[14px]">
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.36em] text-gold-dim">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-gold/45 to-transparent"
      />
    </div>
  );
}

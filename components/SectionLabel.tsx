export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-neon">
      <span aria-hidden="true" className="text-faint">
        {"//"}
      </span>
      <span className="neon-glow">{children}</span>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-rule to-transparent"
      />
    </h2>
  );
}

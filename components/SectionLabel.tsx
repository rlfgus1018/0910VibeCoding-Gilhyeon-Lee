export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xs uppercase tracking-[0.2em] text-faint">
      {children}
    </h2>
  );
}

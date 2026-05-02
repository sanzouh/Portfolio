export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-sm text-primary select-none">▶</span>
      <span className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </span>
      <span className="animate-pulse font-mono text-sm leading-none text-primary select-none">
        █
      </span>
      <span className="h-px w-20 bg-border/40" />
    </div>
  )
}

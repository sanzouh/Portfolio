import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export function SectionLabel({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="h-0 w-0 border-y-[5px] border-l-[9px] border-y-transparent border-l-primary"
      />
      <span>{children}</span>
      <span aria-hidden className="h-5 w-1.5 bg-primary" />
      <span aria-hidden className="h-px w-24 bg-border/40" />
    </span>
  )
}

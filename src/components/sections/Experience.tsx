import { experiences } from "@/data/portfolio"

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
          SYS://XP
        </span>

        <div className="mt-10 flex flex-col">
          {experiences.map((xp, i) => (
            <div key={i} className="relative flex gap-8 md:gap-12">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className="size-2.5 rounded-full border-2 border-primary bg-background shrink-0 mt-1" />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border/50 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 pb-12">
                <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70 uppercase">
                  {xp.period}
                </span>

                <div>
                  <h3 className="text-base font-bold leading-tight">{xp.company}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 tracking-wide">
                    {xp.role}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {xp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {xp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-dashed border-border/50 bg-muted/20 px-2 py-0.5 font-mono text-xs text-foreground/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

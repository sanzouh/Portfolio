import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SectionLabel } from "@/components/ui/section-label"
import { experiences } from "@/data/portfolio"

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 78%", toggleActions: "play reverse play reverse" }

      gsap.from(".experience-sys", {
        opacity: 0,
        x: -12,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: trigger,
      })

      // Timeline spine draws down
      gsap.from(".timeline-spine", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: trigger,
      })

      // Timeline dots pop in
      gsap.from(".timeline-dot", {
        opacity: 0,
        scale: 0,
        stagger: 0.25,
        duration: 0.4,
        ease: "back.out(2)",
        scrollTrigger: { ...trigger, start: "top 76%" },
      })

      // Experience entries slide in from left
      gsap.from(".experience-entry", {
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { ...trigger, start: "top 76%" },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="px-6 md:px-12 lg:px-24 py-24">
      <div data-parallax="30" className="w-full max-w-7xl mx-auto">
        <SectionLabel className="experience-sys">
          SYS://XP
        </SectionLabel>

        <div className="mt-10 flex flex-col">
          {experiences.map((xp, i) => (
            <div key={i} className="relative flex gap-8 md:gap-12">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className="timeline-dot size-2.5 rounded-full border-2 border-primary bg-background shrink-0 mt-1" />
                {i < experiences.length - 1 && (
                  <div className="timeline-spine w-px flex-1 bg-border/50 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="experience-entry flex flex-col gap-3 pb-12">
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

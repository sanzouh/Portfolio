import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SectionLabel } from "@/components/ui/section-label"
import { about, projects, experiences, stack } from "@/data/portfolio"

const stats = [
  { value: projects.length, label: "projets livrés" },
  { value: experiences.length, label: "expériences pro" },
  { value: stack.length, label: "technos maîtrisées" },
  { value: "3+", label: "ans de formation" },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const toggleActions = "play reverse play reverse"
      const trigger = { trigger: sectionRef.current, start: "top 80%", toggleActions }

      gsap.from(".about-sys", {
        opacity: 0,
        x: -12,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: trigger,
      })

      gsap.from(".about-bio-p", {
        opacity: 0,
        y: 18,
        stagger: 0.1,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: { ...trigger, start: "top 78%" },
      })

      gsap.from(".about-seeking", {
        opacity: 0,
        x: -16,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: { ...trigger, start: "top 75%" },
      })

      gsap.from(".about-stat-card", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { ...trigger, start: "top 78%" },
      })

      // Count-up animation for numeric stats — restarts from 0 on each entry
      stats.forEach((stat, i) => {
        const el = statValueRefs.current[i]
        if (!el || typeof stat.value !== "number") return

        const target = stat.value
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: "power2.out",
          onStart() {
            obj.val = 0
            el.textContent = "0"
          },
          onUpdate() {
            el.textContent = Math.round(obj.val).toString()
          },
          scrollTrigger: { ...trigger, start: "top 78%", toggleActions: "restart none restart reset" },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-6 py-24 md:px-12 lg:px-24"
    >
      <div data-parallax="28" className="mx-auto w-full max-w-7xl">
        <SectionLabel className="about-sys">SYS://ABOUT</SectionLabel>

        <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_280px] lg:gap-20">
          {/* Left — bio + seeking */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {about.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="about-bio-p text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Seeking callout */}
            <div className="about-seeking flex flex-col gap-3 border-l-2 border-primary py-1 pl-5">
              <p className="text-sm leading-relaxed text-foreground/80">
                {about.seeking}
              </p>
              <div className="flex flex-wrap gap-2">
                {["DEV FULLSTACK", "DEV BACKEND", "BUSINESS ANALYST", "DATA ENGINEER", "CONCEPTEUR SI"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs tracking-wide text-primary">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border/50 lg:grid-cols-1">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="about-stat-card flex flex-col gap-1 bg-card px-5 py-5"
              >
                <span
                  ref={(el) => {
                    statValueRefs.current[i] = el
                  }}
                  className="text-3xl leading-none font-bold text-primary"
                >
                  {stat.value}
                </span>
                <span className="text-xs tracking-wide text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

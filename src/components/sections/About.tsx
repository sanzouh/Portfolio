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
      const trigger = { trigger: sectionRef.current, start: "top 80%", once: true }

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

      // Count-up animation for numeric stats
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
            el.textContent = "0"
          },
          onUpdate() {
            el.textContent = Math.round(obj.val).toString()
          },
          scrollTrigger: { ...trigger, start: "top 78%" },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div data-parallax="28" className="w-full max-w-7xl mx-auto">
        <SectionLabel className="about-sys">
          SYS://ABOUT
        </SectionLabel>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20 items-start">

          {/* Left — bio + seeking */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="about-bio-p text-sm md:text-base text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Seeking callout */}
            <div className="about-seeking border-l-2 border-primary pl-5 py-1 flex flex-col gap-3">
              <p className="text-sm text-foreground/80 leading-relaxed">
                {about.seeking}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono text-primary tracking-wide">
                  <span className="size-1.5 rounded-full bg-primary" />
                  STAGE · 6 MOIS REMOTE
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-mono text-primary tracking-wide">
                  <span className="size-1.5 rounded-full bg-primary" />
                  POSTE JUNIOR BACKEND
                </span>
              </div>
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-px border border-border/50 rounded-sm overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="about-stat-card flex flex-col gap-1 px-5 py-5 bg-card"
              >
                <span
                  ref={(el) => { statValueRefs.current[i] = el }}
                  className="text-3xl font-bold text-primary leading-none"
                >
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground tracking-wide">
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

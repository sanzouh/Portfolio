import { useLayoutEffect, useRef, type ComponentType } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  SiNodedotjs, SiExpress, SiNestjs,
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiDocker, SiGithubactions, SiJenkins,
  SiPostgresql, SiMysql, SiMongodb, SiPrisma,
  SiLaravel, SiSpring,
  SiJest, SiSwagger,
} from "@icons-pack/react-simple-icons"
import { SectionLabel } from "@/components/ui/section-label"
import { stackCategories } from "@/data/portfolio"

type IconProps = { size?: number; color?: string; className?: string }
type IconComponent = ComponentType<IconProps>

const ICONS: Record<string, IconComponent> = {
  "Node.js":        SiNodedotjs,
  "Express":        SiExpress,
  "NestJS":         SiNestjs,
  "React":          SiReact,
  "Next.js":        SiNextdotjs,
  "TypeScript":     SiTypescript,
  "Tailwind CSS":   SiTailwindcss,
  "Docker":         SiDocker,
  "GitHub Actions": SiGithubactions,
  "Jenkins":        SiJenkins,
  "PostgreSQL":     SiPostgresql,
  "MySQL":          SiMysql,
  "MongoDB":        SiMongodb,
  "Prisma":         SiPrisma,
  "Laravel":        SiLaravel,
  "Spring Boot":    SiSpring,
  "Jest":           SiJest,
  "Swagger":        SiSwagger,
}

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = {
        trigger: sectionRef.current,
        start: "top 78%",
        toggleActions: "play reverse play reverse",
      }

      gsap.fromTo(".tech-sys",
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", immediateRender: false, scrollTrigger: st },
      )

      gsap.fromTo(".tech-category",
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.55, ease: "power2.out", immediateRender: false, scrollTrigger: st },
      )

      gsap.fromTo(".tech-badge",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.03, duration: 0.4, ease: "power2.out", immediateRender: false, scrollTrigger: st },
      )

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="tech" className="px-6 md:px-12 lg:px-24 py-24">
      <div data-parallax="26" className="w-full max-w-7xl mx-auto">
        <SectionLabel className="tech-sys">
          SYS://TECH
        </SectionLabel>

        <div className="mt-10 flex flex-col gap-8">
          {stackCategories.map((category) => (
            <div key={category.label} className="tech-category flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/40 uppercase">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => {
                  const Icon = ICONS[tech]
                  return (
                    <div
                      key={tech}
                      className="tech-badge inline-flex items-center gap-2 rounded-sm border border-border/50 bg-card px-3 py-2 text-xs font-mono text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:bg-primary/5 cursor-default select-none"
                    >
                      {Icon && <Icon size={13} color="currentColor" />}
                      {tech}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

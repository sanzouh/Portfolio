import type { ComponentType } from "react"
import {
  SiNodedotjs, SiExpress, SiNestjs,
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiDocker, SiGithubactions, SiJenkins,
  SiPostgresql, SiMysql, SiMongodb, SiPrisma,
  SiLaravel, SiSpring,
  SiJest, SiSwagger,
} from "@icons-pack/react-simple-icons"
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
  return (
    <section id="tech" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
          SYS://TECH
        </span>

        <div className="mt-10 flex flex-col gap-8">
          {stackCategories.map((category) => (
            <div key={category.label} className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/40 uppercase">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => {
                  const Icon = ICONS[tech]
                  return (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-sm border border-border/50 bg-card px-3 py-2 text-xs font-mono text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:bg-primary/5 cursor-default select-none"
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

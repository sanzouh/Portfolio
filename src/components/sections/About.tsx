import { about, projects, experiences, stack } from "@/data/portfolio"
import { SectionLabel } from "@/components/SectionLabel"

const stats = [
  { value: projects.length, label: "projets livrés" },
  { value: experiences.length, label: "expériences pro" },
  { value: stack.length, label: "technos maîtrisées" },
  { value: "3+", label: "ans de formation" },
]

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <SectionLabel label="SYS://ABOUT" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20 items-start">

          {/* Left — bio + seeking */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Seeking callout */}
            <div className="border-l-2 border-primary pl-5 py-1 flex flex-col gap-3">
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
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 px-5 py-5 bg-card"
              >
                <span className="text-3xl font-bold text-primary leading-none">
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

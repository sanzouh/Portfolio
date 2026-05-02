import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { projects } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const DEFAULT_SCREENSHOT = "/project-image-not-found.png"

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id))

  const openProject = openId
    ? (projects.find((p) => p.id === openId) ?? null)
    : null

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
          SYS://PROJECTS
        </span>

        {/* Card grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => {
            const isOpen = openId === project.id

            return (
              <div
                key={project.id}
                className={cn(
                  "group relative flex cursor-pointer flex-col gap-4 rounded-sm border p-6 transition-all duration-200",
                  isOpen
                    ? "border-primary/70 bg-primary/5 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
                    : "border-border/50 bg-card hover:border-primary/50 hover:bg-primary/3 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.1)]"
                )}
                onClick={() => toggle(project.id)}
              >
                {/* Watermark number */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute right-5 top-4 select-none font-black leading-none transition-colors text-6xl",
                    isOpen
                      ? "text-primary/20"
                      : "text-foreground/4 group-hover:text-primary/12"
                  )}
                >
                  {project.id}
                </span>

                {/* Category */}
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  {project.category}
                </span>

                {/* Name */}
                <h3
                  className={cn(
                    "text-lg font-bold leading-tight transition-colors",
                    isOpen
                      ? "text-primary"
                      : "group-hover:text-primary"
                  )}
                >
                  {project.name}
                </h3>

                {/* Short desc */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.shortDesc}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-sm border px-2 py-0.5 font-mono text-xs transition-colors",
                        isOpen
                          ? "border-primary/30 bg-primary/10 text-primary/80"
                          : "border-border/60 bg-muted/30 text-foreground/60 group-hover:border-border group-hover:text-foreground/70"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div
                  className="flex items-center gap-2 pt-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    variant={isOpen ? "default" : "outline"}
                    size="sm"
                    className={cn(
                      "gap-1.5 font-mono text-xs tracking-widest",
                      !isOpen &&
                        "border-border/60 hover:border-primary hover:bg-primary/10 hover:text-primary"
                    )}
                    onClick={() => toggle(project.id)}
                  >
                    DEEP DIVE
                    <ChevronDown
                      className={cn(
                        "size-3 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </Button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 hover:bg-primary/10 hover:text-primary"
                      >
                        <GithubIcon className="size-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Deep dive panel — rendered below full grid */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            openProject ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="mt-4 rounded-sm border border-primary/30 bg-card p-6 md:p-8">
              {openProject && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]">
                  {/* Screenshot */}
                  <div className="overflow-hidden rounded-sm border border-border/50 bg-muted/10">
                    <img
                      src={openProject.screenshot ?? DEFAULT_SCREENSHOT}
                      alt={`${openProject.name} preview`}
                      className="aspect-video w-full object-cover"
                    />
                  </div>

                  {/* Deep dive text */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-px w-4 bg-primary/60" />
                      <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70 uppercase">
                        Technical Deep Dive — {openProject.name}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {openProject.deepDive}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {openProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-primary/25 bg-primary/8 px-2 py-0.5 font-mono text-xs text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {(openProject.github || openProject.live) && (
                      <div className="flex gap-4 pt-1">
                        {openProject.github && (
                          <a
                            href={openProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                          >
                            <GithubIcon className="size-3.5" />
                            Source code
                          </a>
                        )}
                        {openProject.live && (
                          <a
                            href={openProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                          >
                            ↗ Live demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

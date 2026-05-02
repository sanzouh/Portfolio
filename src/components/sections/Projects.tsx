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

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
          SYS://PROJECTS
        </span>

        <div className="mt-10 flex flex-col divide-y divide-border/50">
          {projects.map((project) => {
            const isOpen = openId === project.id

            return (
              <div key={project.id}>
                {/* Row */}
                <div
                  className="group flex cursor-pointer items-start gap-5 py-6 md:gap-8"
                  onClick={() => toggle(project.id)}
                >
                  {/* Watermark number */}
                  <span
                    aria-hidden
                    className={cn(
                      "hidden w-14 shrink-0 select-none text-right font-black leading-none transition-colors md:block text-5xl",
                      isOpen
                        ? "text-primary/20"
                        : "text-foreground/[0.05] group-hover:text-primary/10"
                    )}
                  >
                    {project.id}
                  </span>

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/50 uppercase">
                      {project.category}
                    </span>
                    <h3
                      className={cn(
                        "text-base font-semibold leading-tight transition-colors",
                        isOpen ? "text-primary" : "group-hover:text-primary"
                      )}
                    >
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground/70">
                      {project.shortDesc}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-border/40 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    className="flex shrink-0 items-center gap-1 pt-0.5"
                    onClick={(e) => e.stopPropagation()}
                  >
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
                          className="hover:bg-primary/10 hover:text-primary"
                        >
                          <GithubIcon className="size-4" />
                        </Button>
                      </a>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "hover:bg-primary/10 hover:text-primary transition-colors",
                        isOpen && "text-primary"
                      )}
                      onClick={() => toggle(project.id)}
                    >
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </Button>
                  </div>
                </div>

                {/* Deep dive panel — grid-rows accordion trick */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 gap-6 pb-8 md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr]">
                      {/* Screenshot */}
                      <div className="overflow-hidden rounded-sm border border-border/50 bg-muted/20">
                        <img
                          src={project.screenshot ?? DEFAULT_SCREENSHOT}
                          alt={`${project.name} preview`}
                          className="aspect-video w-full object-cover"
                        />
                      </div>

                      {/* Technical deep dive */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <span className="h-px w-4 bg-primary/60" />
                          <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70 uppercase">
                            Technical Deep Dive
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.deepDive}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-sm border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] text-primary/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {(project.github || project.live) && (
                          <div className="flex gap-3 pt-1">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                              >
                                <GithubIcon className="size-3.5" />
                                Source code
                              </a>
                            )}
                            {project.live && (
                              <a
                                href={project.live}
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
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

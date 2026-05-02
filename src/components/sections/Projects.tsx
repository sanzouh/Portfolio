import { useState } from "react"
import { ChevronDown, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { projects } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const DEFAULT_SCREENSHOT = "/project-image-not-found.png"

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)

  const openProject = openId
    ? (projects.find((p) => p.id === openId) ?? null)
    : null

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Grid View */}
        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            openProject ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
            SYS://PROJECTS
          </span>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "group relative flex cursor-pointer flex-col gap-4 rounded-sm border p-6 transition-all duration-200",
                  "border-border/50 bg-card hover:border-primary/50 hover:bg-primary/3 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.1)]"
                )}
                onClick={() => setOpenId(project.id)}
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-4 select-none font-black leading-none text-6xl text-foreground/4 group-hover:text-primary/12 transition-colors"
                >
                  {project.id}
                </span>

                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.shortDesc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-dashed border-border/50 bg-muted/20 px-2 py-0.5 font-mono text-xs text-foreground/50 transition-colors group-hover:border-border/70 group-hover:text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 pt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-border/60 hover:border-primary hover:bg-primary/10 hover:text-primary"
                      >
                        <GithubIcon className="size-4" />
                        <span className="font-mono text-xs tracking-wide">GitHub</span>
                      </Button>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-border/60 hover:border-primary hover:bg-primary/10 hover:text-primary"
                      >
                        <span className="text-sm leading-none">↗</span>
                        <span className="font-mono text-xs tracking-wide">Live</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail View - Absolute Overlay */}
        <div
          className={cn(
            "absolute inset-0 top-0 left-0 transition-all duration-500 ease-in-out",
            openProject
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {openProject && (
            <div className="space-y-6">
              {/* Back Button */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 font-mono text-xs tracking-widest"
                  onClick={() => setOpenId(null)}
                >
                  <ArrowLeft className="size-3.5" />
                  BACK
                </Button>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
                {/* Left: Summary */}
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase">
                      {openProject.category}
                    </span>
                    <h1 className="mt-2 text-4xl font-black text-primary leading-tight">
                      {openProject.name}
                    </h1>
                  </div>

                  <div>
                    <h2 className="mb-3 text-xs font-semibold text-muted-foreground/50 uppercase tracking-[0.15em]">
                      Overview
                    </h2>
                    <p className="text-base leading-relaxed text-foreground">
                      {openProject.shortDesc}
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-3 text-xs font-semibold text-muted-foreground/50 uppercase tracking-[0.15em]">
                      Technical Details
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {openProject.deepDive}
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-3 text-xs font-semibold text-muted-foreground/50 uppercase tracking-[0.15em]">
                      Technologies
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {openProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-primary/25 bg-primary/8 px-3 py-1.5 font-mono text-xs text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(openProject.github || openProject.live) && (
                    <div className="flex gap-4 pt-4 border-t border-border/30 pt-6">
                      {openProject.github && (
                        <a
                          href={openProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors hover:text-primary/70"
                        >
                          <GithubIcon className="size-4" />
                          Source code
                        </a>
                      )}
                      {openProject.live && (
                        <a
                          href={openProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors hover:text-primary/70"
                        >
                          ↗ Live demo
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Right: Screenshot */}
                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-sm border border-border/50 bg-muted/10">
                    <img
                      src={openProject.screenshot ?? DEFAULT_SCREENSHOT}
                      alt={`${openProject.name} preview`}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="rounded-sm border border-primary/20 bg-primary/5 p-4">
                    <p className="text-xs font-mono tracking-[0.2em] text-primary/60 uppercase mb-2">
                      Project Preview
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      This project showcases {openProject.name}. Click the links above to explore
                      the source code or visit the live demo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

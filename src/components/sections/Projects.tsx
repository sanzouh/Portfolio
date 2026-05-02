import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/ui/section-label"
import { GithubIcon } from "@/components/icons"
import { projects } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const DEFAULT_SCREENSHOT = "/project-image-not-found.png"

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const openProject = openId
    ? (projects.find((p) => p.id === openId) ?? null)
    : null
  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const openProjectDetail = (id: string) => {
    if (openId === id) return

    const grid = gridRef.current

    if (!grid || prefersReducedMotion()) {
      setOpenId(id)
      return
    }

    gsap.killTweensOf(grid)
    gsap.to(grid, {
      opacity: 0,
      y: -18,
      filter: "blur(6px)",
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => setOpenId(id),
    })
  }

  const closeProjectDetail = () => {
    const detail = detailRef.current

    if (!detail || prefersReducedMotion()) {
      setOpenId(null)
      requestAnimationFrame(() => {
        gsap.set(gridRef.current, { clearProps: "opacity,y,filter" })
      })
      return
    }

    gsap.killTweensOf(detail)
    gsap.to(detail, {
      opacity: 0,
      y: 10,
      filter: "blur(3px)",
      duration: 0.16,
      ease: "power2.in",
      onComplete: () => {
        setOpenId(null)
        requestAnimationFrame(() => {
          gsap.fromTo(
            gridRef.current,
            { opacity: 0, y: -12, filter: "blur(4px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.2,
              ease: "power2.out",
              clearProps: "opacity,y,filter",
            },
          )
        })
      },
    })
  }

  // Scroll-triggered entrance for the grid cards (runs once)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap
            .timeline()
            .fromTo(
              ".projects-sys",
              { opacity: 0, x: -12 },
              { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
            )
            .fromTo(
              ".project-card",
              { opacity: 0, y: 28 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
              },
              "-=0.2",
            )
        },
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate detail view open
  useEffect(() => {
    if (openProject && detailRef.current) {
      requestAnimationFrame(() => {
        const detail = detailRef.current
        if (!detail) return

        const rect = detail.getBoundingClientRect()
        const headerOffset = 112
        const absoluteTop = window.scrollY + rect.top
        const availableHeight = window.innerHeight - headerOffset
        const centeredTop = absoluteTop - (availableHeight - rect.height) / 2
        const topWithBackButtonVisible = absoluteTop - headerOffset
        const targetTop =
          rect.height > availableHeight
            ? topWithBackButtonVisible
            : Math.min(centeredTop, topWithBackButtonVisible)
        const reduceMotion = prefersReducedMotion()

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: reduceMotion ? "auto" : "smooth",
        })

        if (reduceMotion) {
          gsap.set(detail, { clearProps: "opacity,y,filter" })
          return
        }

        const detailItems = detail.querySelectorAll(".project-detail-item")
        const detailMedia = detail.querySelectorAll(".project-detail-media")

        gsap
          .timeline()
          .fromTo(
            detail,
            { opacity: 0, y: 22, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.5,
              ease: "power2.out",
            },
          )
          .fromTo(
            detailItems,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.06,
              duration: 0.42,
              ease: "power2.out",
            },
            "-=0.28",
          )
          .fromTo(
            detailMedia,
            { opacity: 0, y: 18, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.38",
          )
      })
    }
  }, [openProject])

  return (
    <section ref={sectionRef} id="projects" className="px-6 py-24 md:px-12 lg:px-24">
      <div data-parallax="34" className="relative mx-auto w-full max-w-7xl">
        {/* Grid View */}
        <div
          ref={gridRef}
          className={cn(
            "transition-all duration-500 ease-in-out",
            openProject ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          <SectionLabel className="projects-sys">
            SYS://PROJECTS
          </SectionLabel>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "project-card group relative flex cursor-pointer flex-col gap-4 rounded-sm border p-6 transition-all duration-200",
                  "border-border/50 bg-card hover:border-primary/50 hover:bg-primary/3 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.1)]",
                )}
                onClick={() => openProjectDetail(project.id)}
              >
                <span
                  aria-hidden
                  className="absolute top-4 right-5 text-6xl leading-none font-black text-foreground/4 transition-colors select-none group-hover:text-primary/12"
                >
                  {project.id}
                </span>

                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  {project.category}
                </span>

                <h3 className="text-lg leading-tight font-bold transition-colors group-hover:text-primary">
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
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
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
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
            "absolute inset-0 top-0 left-0 transition-opacity duration-500 ease-in-out",
            openProject
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          {openProject && (
            <div ref={detailRef} className="space-y-6">
              {/* Back Button */}
              <div className="project-detail-item flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 font-mono text-xs tracking-widest"
                  onClick={closeProjectDetail}
                >
                  <ArrowLeft className="size-3.5" />
                  RETOUR
                </Button>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
                {/* Left: Summary */}
                <div className="space-y-6">
                  <div className="project-detail-item">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase">
                      {openProject.category}
                    </span>
                    <h1 className="mt-2 text-4xl leading-tight font-black text-primary">
                      {openProject.name}
                    </h1>
                  </div>

                  <div className="project-detail-item">
                    <h2 className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                      Aperçu
                    </h2>
                    <p className="text-base leading-relaxed text-foreground">
                      {openProject.shortDesc}
                    </p>
                  </div>

                  <div className="project-detail-item">
                    <h2 className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
                      Détails Techniques
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {openProject.deepDive}
                    </p>
                  </div>

                  <div className="project-detail-item">
                    <h2 className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground/50 uppercase">
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
                    <div className="project-detail-item flex gap-4 border-t border-border/30 pt-6">
                      {openProject.github && (
                        <a
                          href={openProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors hover:text-primary/70"
                        >
                          <GithubIcon className="size-4" />
                          Code source
                        </a>
                      )}
                      {openProject.live && (
                        <a
                          href={openProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors hover:text-primary/70"
                        >
                          ↗ Demo live
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Right: Screenshot */}
                <div className="flex flex-col gap-4">
                  <div className="project-detail-media overflow-hidden rounded-sm border border-border/50 bg-muted/10">
                    <img
                      src={openProject.screenshot ?? DEFAULT_SCREENSHOT}
                      alt={`${openProject.name} preview`}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="project-detail-media rounded-sm border border-primary/20 bg-primary/5 p-4">
                    <p className="mb-2 font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">
                      Aperçu du projet
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Ce projet présente {openProject.name}. Cliquez sur les
                      liens à côté pour consulter le code source ou découvrir la
                      démo en ligne.
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

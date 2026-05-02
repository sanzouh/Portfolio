import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Mail, MapPin, Award, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/ui/section-label"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { owner, links } from "@/data/portfolio"

const heroTypingTexts = [
  "Je conçois des systèmes backend robustes et des interfaces soignées, de la conception à la mise en production.",
  "Je transforme des besoins métier en applications fiables, maintenables et prêtes à évoluer.",
  "Je construis des expériences web performantes avec une attention forte portée au détail technique.",
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const taglineTextRef = useRef<HTMLSpanElement>(null)
  const taglineCursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
      const tl = gsap.timeline({ delay: 0.15 })

      tl.from(".hero-sys", {
          opacity: 0,
          x: -12,
          duration: 0.4,
          ease: "power2.out",
        })
        .from(
          ".hero-badge",
          { opacity: 0, y: 12, duration: 0.5, ease: "power2.out" },
          "-=0.15",
        )
        .from(
          ".hero-name-1",
          { opacity: 0, y: 32, duration: 0.65, ease: "power3.out" },
          "-=0.25",
        )
        .from(
          ".hero-name-2",
          { opacity: 0, y: 32, duration: 0.65, ease: "power3.out" },
          "-=0.5",
        )
        .from(
          ".hero-divider",
          {
            opacity: 0,
            scaleX: 0,
            duration: 0.45,
            ease: "power2.out",
            transformOrigin: "left center",
          },
          "-=0.35",
        )
        .from(
          ".hero-title-text",
          { opacity: 0, x: -12, duration: 0.45, ease: "power2.out" },
          "-=0.25",
        )
        .from(
          ".hero-tagline",
          { opacity: 0, y: 12, duration: 0.45, ease: "power2.out" },
          "-=0.2",
        )
        .add(() => {
          const textElement = taglineTextRef.current
          const cursorElement = taglineCursorRef.current

          if (!textElement || !cursorElement) return

          if (prefersReducedMotion) {
            textElement.textContent = heroTypingTexts[0]
            return
          }

          const typeText = (text: string) => {
            const state = { length: 0 }

            return gsap.to(state, {
              length: text.length,
              duration: Math.min(9.0, Math.max(5.5, text.length * 0.082)),
              ease: "none",
              onUpdate: () => {
                textElement.textContent = text.slice(0, Math.round(state.length))
              },
            })
          }

          const eraseText = (text: string) => {
            const state = { length: text.length }

            return gsap.to(state, {
              length: 0,
              duration: Math.min(9.5, Math.max(6.0, text.length * 0.085)),
              ease: "none",
              onUpdate: () => {
                textElement.textContent = text.slice(0, Math.round(state.length))
              },
            })
          }

          const typingTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.4 })

          gsap.to(cursorElement, {
            opacity: 0,
            duration: 0.65,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          })

          heroTypingTexts.forEach((text) => {
            typingTimeline
              .add(typeText(text))
              .to({}, { duration: 3.5 })
              .add(eraseText(text))
              .to({}, { duration: 1.2 })
          })
        })
        .from(
          ".hero-location",
          { opacity: 0, y: 8, duration: 0.4, ease: "power2.out" },
          "-=0.3",
        )
        .from(
          ".hero-social-btn",
          {
            opacity: 0,
            y: 12,
            stagger: 0.07,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.25",
        )
        .from(
          ".hero-photo",
          { opacity: 0, scale: 0.93, duration: 0.9, ease: "power2.out" },
          "-=0.8",
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16"
    >
      <div data-parallax="18" className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px] gap-12 md:gap-16 items-center">

        {/* Left — text content */}
        <div className="order-2 md:order-1 flex flex-col gap-5">
          <SectionLabel className="hero-sys">
            SYS://HOME
          </SectionLabel>

          {owner.available && (
            <div className="hero-badge inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-primary">
                AVAILABLE FOR WORK
              </span>
            </div>
          )}

          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              <span className="hero-name-1 block">{owner.firstName}</span>
              <span className="hero-name-2 block text-primary">{owner.lastName}</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="hero-divider h-px w-8 bg-primary shrink-0" />
            <span className="hero-title-text text-sm md:text-base text-muted-foreground font-light tracking-[0.2em] uppercase">
              {owner.title}
            </span>
          </div>

          <p className="hero-tagline min-h-[4.5rem] max-w-md text-sm leading-relaxed text-muted-foreground md:min-h-[3.75rem] md:text-base">
            <span ref={taglineTextRef} />
            <span
              ref={taglineCursorRef}
              aria-hidden
              className="ml-1 inline-block h-4 w-1 translate-y-0.5 bg-primary md:h-5"
            />
          </p>

          <div className="hero-location flex items-center gap-1.5 text-xs text-muted-foreground/50">
            <MapPin className="size-3 shrink-0" />
            <span>{owner.location}</span>
          </div>

          <div className="flex items-center gap-0.5 pt-1">
            <a href={links.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <Button
                variant="ghost"
                size="icon"
                className="hero-social-btn hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <GithubIcon className="size-4" />
              </Button>
            </a>

            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Button
                variant="ghost"
                size="icon"
                className="hero-social-btn hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <LinkedinIcon className="size-4" />
              </Button>
            </a>

            <a href={links.codersrank} target="_blank" rel="noopener noreferrer" title="CodersRank">
              <Button
                variant="ghost"
                size="icon"
                className="hero-social-btn hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Award className="size-4" />
              </Button>
            </a>

            <a href={`mailto:${links.email}`} title="Email">
              <Button
                variant="ghost"
                size="icon"
                className="hero-social-btn hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="size-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end items-center">
          <div className="hero-photo relative">
            {/* Yellow ambient glow */}
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="relative size-56 md:size-72 lg:size-80">
              {/* Tech corner decorations */}
              <span className="absolute -top-2 -left-2 size-4 border-t-2 border-l-2 border-primary/70" />
              <span className="absolute -top-2 -right-2 size-4 border-t-2 border-r-2 border-primary/70" />
              <span className="absolute -bottom-2 -left-2 size-4 border-b-2 border-l-2 border-primary/70" />
              <span className="absolute -bottom-2 -right-2 size-4 border-b-2 border-r-2 border-primary/70" />

              <img
                src={owner.photo}
                alt={owner.name}
                className="size-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse pointer-events-none">
        <ChevronDown className="size-4 text-muted-foreground/30" />
      </div>
    </section>
  )
}

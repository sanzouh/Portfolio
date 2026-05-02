import { Mail, MapPin, Award, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { owner, links } from "@/data/portfolio"
import { SectionLabel } from "@/components/SectionLabel"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px] gap-12 md:gap-16 items-center">

        {/* Left — text content */}
        <div className="order-2 md:order-1 flex flex-col gap-5">
          <SectionLabel label="SYS://HOME" />

          {owner.available && (
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-primary">
                AVAILABLE FOR WORK
              </span>
            </div>
          )}

          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              <span className="block">{owner.firstName}</span>
              <span className="block text-primary">{owner.lastName}</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary shrink-0" />
            <span className="text-sm md:text-base text-muted-foreground font-light tracking-[0.2em] uppercase">
              {owner.title}
            </span>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            {owner.tagline}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
            <MapPin className="size-3 shrink-0" />
            <span>{owner.location}</span>
          </div>

          <div className="flex items-center gap-0.5 pt-1">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <GithubIcon className="size-4" />
              </Button>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <LinkedinIcon className="size-4" />
              </Button>
            </a>

            <a
              href={links.codersrank}
              target="_blank"
              rel="noopener noreferrer"
              title="CodersRank"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Award className="size-4" />
              </Button>
            </a>

            <a href={`mailto:${links.email}`} title="Email">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="size-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end items-center">
          <div className="relative">
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

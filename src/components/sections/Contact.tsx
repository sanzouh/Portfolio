import { Mail } from "lucide-react"
import { LinkedinIcon } from "@/components/icons"
import { links } from "@/data/portfolio"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-7xl">
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
          SYS://CONTACT
        </span>

        <div className="mt-10 flex flex-col gap-12">
          {/* Big CTA */}
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl leading-none font-black tracking-tight uppercase md:text-7xl lg:text-8xl">
              <span className="block text-foreground">TRAVAILLONS</span>
              <span className="block text-primary">ENSEMBLE.</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              Vous souhaitez discuter, collaborer ou échanger sur un projet ?{" "}
              <span className="text-foreground/80">
                N'hésitez pas à me contacter,
              </span>{" "}
              je vous répondrai dans les plus brefs délais.
            </p>
          </div>

          {/* Contact blocks */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${links.email}`}
              className="group flex flex-1 items-center gap-4 rounded-sm border border-border/50 bg-card px-6 py-5 transition-all duration-200 hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_24px_-8px_hsl(var(--primary)/0.2)]"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-border/50 bg-muted/30 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
                <Mail className="size-4" />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  Email
                </span>
                <span className="truncate text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                  {links.email}
                </span>
              </div>
              <span className="ml-auto shrink-0 font-mono text-xs text-muted-foreground/30 transition-colors group-hover:text-primary/50">
                ↗
              </span>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center gap-4 rounded-sm border border-border/50 bg-card px-6 py-5 transition-all duration-200 hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_24px_-8px_hsl(var(--primary)/0.2)]"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-border/50 bg-muted/30 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
                <LinkedinIcon className="size-4" />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  LinkedIn
                </span>
                <span className="truncate text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                  /in/santa-herizo
                </span>
              </div>
              <span className="ml-auto shrink-0 font-mono text-xs text-muted-foreground/30 transition-colors group-hover:text-primary/50">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SectionLabel } from "@/components/ui/section-label"
import { services } from "@/data/portfolio"

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: "top 82%", once: true }

      gsap.from(".services-sys", {
        opacity: 0,
        x: -12,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: trigger,
      })

      gsap.from(".service-card", {
        opacity: 0,
        y: 32,
        stagger: 0.12,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { ...trigger, start: "top 80%" },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="px-6 md:px-12 lg:px-24 py-24">
      <div data-parallax="32" className="w-full max-w-7xl mx-auto">
        <SectionLabel className="services-sys">
          SYS://SERVICES
        </SectionLabel>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border/50 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card group relative flex flex-col gap-4 bg-card px-7 py-8 transition-colors hover:bg-card/80 overflow-hidden"
            >
              {/* Watermark number */}
              <span
                aria-hidden
                className="absolute -top-2 right-4 text-8xl leading-none font-black text-foreground/4 transition-colors select-none group-hover:text-primary/10"
              >
                {service.number}
              </span>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest text-muted-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <span className="h-px w-8 bg-primary/40 transition-all group-hover:w-12 group-hover:bg-primary" />

              {/* Title */}
              <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* Left border accent on hover */}
              <span className="absolute top-0 left-0 h-full w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

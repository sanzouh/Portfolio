import { services } from "@/data/portfolio"

export function Services() {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
          SYS://SERVICES
        </span>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px border border-border/50 rounded-sm overflow-hidden">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col gap-4 bg-card px-7 py-8 transition-colors hover:bg-card/80 overflow-hidden"
            >
              {/* Watermark number */}
              <span
                aria-hidden
                className="absolute -top-2 right-4 text-8xl font-black text-foreground/[0.04] select-none leading-none transition-colors group-hover:text-primary/10"
              >
                {service.number}
              </span>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-widest text-muted-foreground/60"
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Left border accent on hover */}
              <span className="absolute left-0 top-0 h-full w-[2px] bg-primary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

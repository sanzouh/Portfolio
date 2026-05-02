import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useForm, ValidationError } from "@formspree/react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, WhatsappIcon } from "@/components/icons"
import { SectionLabel } from "@/components/ui/section-label"
import { links } from "@/data/portfolio"
import { cn } from "@/lib/utils"

function FormField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="contact-field flex flex-col gap-1.5">
      <label className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
        {label}
      </label>
      {children}
      {error && (
        <span className="font-mono text-xs text-destructive">{error}</span>
      )}
    </div>
  )
}

const inputClass =
  "w-full rounded-sm border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors focus:border-primary/60 focus:bg-primary/[0.02]"

export function Contact() {
  const [state, handleSubmit] = useForm(links.formspree)
  const sectionRef = useRef<HTMLElement>(null)

  const emailError = state.errors?.getFieldErrors("email")?.[0]?.message
  const messageError = state.errors?.getFieldErrors("message")?.[0]?.message

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap
            .timeline()
            .fromTo(
              ".contact-sys",
              { opacity: 0, x: -12 },
              { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
            )
            .fromTo(
              ".contact-heading-1",
              { opacity: 0, y: 28 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
              "-=0.2",
            )
            .fromTo(
              ".contact-heading-2",
              { opacity: 0, y: 28 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
              "-=0.55",
            )
            .fromTo(
              ".contact-desc",
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
              "-=0.35",
            )
            .fromTo(
              ".contact-field",
              { opacity: 0, x: -16 },
              {
                opacity: 1,
                x: 0,
                stagger: 0.08,
                duration: 0.5,
                ease: "power2.out",
              },
              "-=0.25",
            )
            .fromTo(
              ".contact-submit",
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
              "-=0.2",
            )
            .fromTo(
              ".contact-block",
              { opacity: 0, x: 16 },
              {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.55,
                ease: "power2.out",
              },
              "-=0.45",
            )
        },
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="px-6 py-24 md:px-12 lg:px-24"
    >
      <div data-parallax="24" className="mx-auto w-full max-w-7xl">
        <SectionLabel className="contact-sys">SYS://CONTACT</SectionLabel>

        <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Left — form */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl leading-none font-black tracking-tight uppercase md:text-5xl lg:text-6xl">
                <span className="contact-heading-1 block text-foreground">
                  TRAVAILLONS
                </span>
                <span className="contact-heading-2 block text-primary">
                  ENSEMBLE.
                </span>
              </h2>
              <p className="contact-desc mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Vous souhaitez discuter, collaborer ou échanger sur un projet ?{" "}
                <span className="text-foreground/80">
                  N'hésitez pas à me contacter,
                </span>{" "}
                je vous répondrai dans les plus brefs délais.
              </p>
            </div>

            {state.succeeded ? (
              /* Success state */
              <div className="flex flex-col gap-3 rounded-sm border border-primary/40 bg-primary/5 px-6 py-8">
                <span className="font-mono text-[10px] tracking-[0.3em] text-primary/60 uppercase">
                  TRANSMISSION RÉUSSIE
                </span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Message bien reçu. Je reviens vers vous rapidement.
                </p>
                <span className="font-mono text-xs text-muted-foreground/40">
                  — {links.email}
                </span>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField label="Nom">
                    <input
                      type="text"
                      name="name"
                      placeholder="Santa Herizo"
                      required
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Email" error={emailError}>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className={cn(
                        inputClass,
                        emailError && "border-destructive/60"
                      )}
                    />
                    <ValidationError
                      field="email"
                      errors={state.errors}
                      className="hidden"
                    />
                  </FormField>
                </div>

                <FormField label="Sujet">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Collaboration, stage, projet..."
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Message" error={messageError}>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    required
                    className={cn(
                      inputClass,
                      "resize-none",
                      messageError && "border-destructive/60"
                    )}
                  />
                  <ValidationError
                    field="message"
                    errors={state.errors}
                    className="hidden"
                  />
                </FormField>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="contact-submit gap-2 self-start font-mono text-xs tracking-widest"
                >
                  {state.submitting ? (
                    <>
                      <span className="size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      ENVOI EN COURS...
                    </>
                  ) : (
                    <>
                      <Send className="size-3.5" />
                      ENVOYER
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Right — contact blocks */}
          <div className="flex flex-col gap-3 lg:pt-28">
            <a
              href={`mailto:${links.email}`}
              className="contact-block group flex items-center gap-4 rounded-sm border border-border/50 bg-card px-5 py-4 transition-all duration-200 hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.2)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-sm border border-border/50 bg-muted/30 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                <Mail className="size-4" />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  Email
                </span>
                <span className="truncate text-xs font-medium text-foreground/70 transition-colors group-hover:text-primary">
                  {links.email}
                </span>
              </div>
              <span className="ml-auto shrink-0 text-sm text-muted-foreground/30 transition-colors group-hover:text-primary/60">
                ↗
              </span>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-block group flex items-center gap-4 rounded-sm border border-border/50 bg-card px-5 py-4 transition-all duration-200 hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.2)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-sm border border-border/50 bg-muted/30 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                <LinkedinIcon className="size-4" />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  LinkedIn
                </span>
                <span className="truncate text-xs font-medium text-foreground/70 transition-colors group-hover:text-primary">
                  /in/santa-herizo
                </span>
              </div>
              <span className="ml-auto shrink-0 text-sm text-muted-foreground/30 transition-colors group-hover:text-primary/60">
                ↗
              </span>
            </a>

            <a
              href="https://wa.me/261344114066?text=Bonjour%20Santa%2C%20je%20souhaiterais%20discuter%20d%27un%20projet%20avec%20toi."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-block group flex items-center gap-4 rounded-sm border border-border/50 bg-card px-5 py-4 transition-all duration-200 hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.2)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-sm border border-border/50 bg-muted/30 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                <WhatsappIcon className="size-4" />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
                  WhatsApp
                </span>
                <span className="truncate text-xs font-medium text-foreground/70 transition-colors group-hover:text-primary">
                  +261 34 41 140 66
                </span>
              </div>
              <span className="ml-auto shrink-0 text-sm text-muted-foreground/30 transition-colors group-hover:text-primary/60">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

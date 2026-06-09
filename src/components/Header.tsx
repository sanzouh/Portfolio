import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Sun, Moon, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { links } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Accueil",    id: "home" },
  { label: "À propos",   id: "about" },
  { label: "Projets",    id: "projects" },
  { label: "Expérience", id: "experience" },
  { label: "Contact",    id: "contact" },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const isDark = theme !== "light"

  const [activeId, setActiveId]     = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)

  const navRef         = useRef<HTMLElement>(null)
  const indicatorRef   = useRef<HTMLSpanElement>(null)
  const itemRefs       = useRef<(HTMLAnchorElement | null)[]>([])
  const mobileRef      = useRef<HTMLDivElement>(null)
  const isProgrammatic = useRef(false)
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* ── move the sliding indicator ── */
  const moveIndicator = (id: string, instant = false) => {
    const idx = NAV.findIndex(n => n.id === id)
    const el  = itemRefs.current[idx]
    const nav = navRef.current
    const ind = indicatorRef.current
    if (!el || !nav || !ind) return

    const navBox = nav.getBoundingClientRect()
    const elBox  = el.getBoundingClientRect()

    const method = instant ? gsap.set : gsap.to
    method(ind, {
      x: elBox.left - navBox.left,
      width: elBox.width,
      ...(instant ? {} : { duration: 0.45, ease: "power3.inOut" }),
    })
  }

  /* ── initial indicator position after fonts/layout settle ── */
  useEffect(() => {
    const raf = requestAnimationFrame(() => moveIndicator("home", true))
    return () => cancelAnimationFrame(raf)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── slide indicator on active change ── */
  useEffect(() => { moveIndicator(activeId) }, [activeId])

  /* ── IntersectionObserver — which section is in viewport ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (isProgrammatic.current) return
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id)
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  /* ── header entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hdr-logo", {
        opacity: 0, x: -14, duration: 0.55, ease: "power2.out", delay: 0.2,
      })
      gsap.from(".hdr-pill", {
        opacity: 0, y: -12, duration: 0.55, ease: "power2.out", delay: 0.3,
      })
      gsap.from(".hdr-action", {
        opacity: 0, x: 12, stagger: 0.08, duration: 0.5, ease: "power2.out", delay: 0.2,
      })
    })
    return () => ctx.revert()
  }, [])

  /* ── mobile menu animation ── */
  useEffect(() => {
    const menu = mobileRef.current
    if (!menu) return

    if (mobileOpen) {
      gsap.set(menu, { display: "flex" })
      gsap.fromTo(menu,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" },
      )
      gsap.from(".mob-item", {
        opacity: 0, y: 14, stagger: 0.06, duration: 0.32, ease: "power2.out",
      })
    } else {
      gsap.to(menu, {
        opacity: 0, y: -10, duration: 0.22, ease: "power2.in",
        onComplete: () => gsap.set(menu, { display: "none" }),
      })
    }
  }, [mobileOpen])

  const scrollTo = (id: string) => {
    setActiveId(id)
    setMobileOpen(false)

    // Bloquer l'observer pendant le scroll programmatique
    isProgrammatic.current = true
    if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

    // Débounce sur l'événement scroll : réactiver l'observer 150ms après
    // le dernier événement de scroll (= scroll terminé)
    const onScroll = () => {
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
      scrollEndTimer.current = setTimeout(() => {
        isProgrammatic.current = false
        window.removeEventListener("scroll", onScroll)
      }, 150)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-border/50 bg-background/80 px-6 backdrop-blur-md md:px-12">

        {/* Logo */}
        <img src="/sanzu-logo.png" alt="Logo" className="hdr-logo h-10 w-auto select-none" />

        {/* ── Desktop pill nav ── */}
        <nav
          ref={navRef}
          className="hdr-pill relative hidden items-center rounded-full border border-border/60 bg-card/50 px-1.5 py-1.5 backdrop-blur-sm md:flex"
        >
          {/* Sliding background indicator */}
          <span
            ref={indicatorRef}
            className="absolute top-1.5 left-0 h-[calc(100%-12px)] rounded-full border border-primary/20 bg-primary/10 pointer-events-none"
          />

          {NAV.map((item, i) => (
            <a
              key={item.id}
              ref={el => { itemRefs.current[i] = el }}
              href={`#${item.id}`}
              onClick={e => { e.preventDefault(); scrollTo(item.id) }}
              className={cn(
                "relative z-10 select-none rounded-full px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300",
                activeId === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground/80",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2">
          {/* theme toggle — disabled until light mode is polished */}

          <a
            href={links.cv}
            download="CV-Santa-Herizo-RAZAFINDRAKOTO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hdr-action hidden sm:block"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-border hover:border-primary hover:bg-primary/10 hover:text-primary font-mono text-xs tracking-widest"
            >
              <Download className="size-3.5" />
              <span className="hidden sm:inline">CV</span>
            </Button>
          </a>

          {/* Hamburger — mobile only */}
          <Button
            variant="ghost"
            size="icon"
            className="hdr-action md:hidden hover:bg-primary/10 hover:text-primary"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </header>

      {/* ── Mobile dropdown ── */}
      <div
        ref={mobileRef}
        style={{ display: "none" }}
        className="fixed inset-x-0 top-14 z-40 flex-col border-b border-border/50 bg-background/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden"
      >
        {NAV.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={e => { e.preventDefault(); scrollTo(item.id) }}
            className="mob-item flex items-center gap-4 border-b border-border/25 py-4 last:border-0"
          >
            <span className="w-6 font-mono text-[10px] tracking-widest text-primary/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={cn(
              "font-mono text-sm tracking-[0.18em] uppercase transition-colors",
              activeId === item.id ? "text-primary" : "text-foreground/60",
            )}>
              {item.label}
            </span>
            {activeId === item.id && (
              <span className="ml-auto size-1.5 shrink-0 rounded-full bg-primary" />
            )}
          </a>
        ))}

        <a
          href={links.cv}
          download="CV-Santa-Herizo-RAZAFINDRAKOTO.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mob-item mt-5 block"
        >
          <Button className="w-full gap-2 font-mono text-xs tracking-widest">
            <Download className="size-3.5" />
            TÉLÉCHARGER CV
          </Button>
        </a>
      </div>
    </>
  )
}

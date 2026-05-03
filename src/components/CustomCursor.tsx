import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  alpha: number
  decay: number
  size: number
  color: string
}

const SPARK_COLORS = ["#fcd34d", "#fbbf24", "#f59e0b", "#fde68a", "#fff7cc"]

function emit(particles: Particle[], x: number, y: number, count: number, speed: number) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const v = (Math.random() * 0.6 + 0.4) * speed
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * v + (Math.random() - 0.5),
      vy: Math.sin(angle) * v - Math.random() * 2.5,
      alpha: 0.85 + Math.random() * 0.15,
      decay: 0.026 + Math.random() * 0.022,
      size: Math.random() * 2.4 + 0.8,
      color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
    })
  }
}

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const raf = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return

    const dot    = dotRef.current
    const ring   = ringRef.current
    const canvas = canvasRef.current
    if (!dot || !ring || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -200, y: -200 })

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const xDot  = gsap.quickTo(dot,  "x", { duration: 0.05, ease: "none" })
    const yDot  = gsap.quickTo(dot,  "y", { duration: 0.05, ease: "none" })
    const xRing = gsap.quickTo(ring, "x", { duration: 0.2,  ease: "power3.out" })
    const yRing = gsap.quickTo(ring, "y", { duration: 0.2,  ease: "power3.out" })

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX);  yDot(e.clientY)
      xRing(e.clientX); yRing(e.clientY)
      if (particles.current.length < 130) {
        emit(particles.current, e.clientX, e.clientY, 2, 2.8)
      }
    }

    const onClick = (e: MouseEvent) => {
      emit(particles.current, e.clientX, e.clientY, 22, 5.5)
      gsap.fromTo(ring,
        { scale: 1, opacity: 1 },
        { scale: 2.4, opacity: 0, duration: 0.38, ease: "power2.out",
          onComplete: () => gsap.set(ring, { scale: 1, opacity: 1 }) },
      )
    }

    const onEnter = () => {
      gsap.to(ring, { scale: 1.75, opacity: 0.9, duration: 0.22, ease: "power2.out" })
      gsap.to(dot,  { scale: 0.4,  duration: 0.2 })
    }
    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 })
      gsap.to(dot,  { scale: 1, duration: 0.2 })
    }

    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select")
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current = particles.current.filter(p => p.alpha > 0.02)

      for (const p of particles.current) {
        p.x  += p.vx
        p.y  += p.vy
        p.vy += 0.09
        p.vx *= 0.97
        p.alpha -= p.decay

        const a = Math.max(0, p.alpha)
        ctx.save()
        ctx.globalAlpha = a
        ctx.fillStyle   = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur  = 7
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * a, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      raf.current = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener("mousemove", onMove)
    window.addEventListener("click", onClick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("click", onClick)
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf.current)
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] size-7 rounded-full border border-primary/60"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] size-1.5 rounded-full bg-primary"
        style={{ willChange: "transform" }}
      />
    </>
  )
}

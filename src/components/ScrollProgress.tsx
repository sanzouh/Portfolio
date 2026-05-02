import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight
        const nextProgress =
          scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0

        setProgress(Math.min(Math.max(nextProgress, 0), 1))
      })
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  const percent = Math.round(progress * 100)

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-14 right-0 left-0 z-[60]"
    >
      <div className="h-px w-full bg-border/25">
        <div
          className="h-full origin-left bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.65)] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div
        className="absolute top-3 right-4 hidden items-center gap-2 font-mono text-[10px] tracking-[0.24em] text-primary/70 transition-opacity duration-300 md:flex"
        style={{ opacity: progress > 0.03 && progress < 0.97 ? 1 : 0 }}
      >
        <span className="h-px w-10 bg-primary/40" />
        <span>{percent.toString().padStart(2, "0")}%</span>
      </div>
    </div>
  )
}

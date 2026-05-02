import { Sun, Moon, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { links } from "@/data/portfolio"

export function Header() {
  const { theme, setTheme } = useTheme()
  const isDark = theme !== "light"

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b border-border/50 bg-background/90 px-6 backdrop-blur-sm md:px-12">
      <img
        src="/sanzu-logo.png"
        alt="Logo"
        className="h-10 w-auto select-none"
      />

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="transition-colors hover:bg-primary/10 hover:text-primary"
          title={isDark ? "Mode clair" : "Mode sombre"}
        >
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>

        <a
          href={links.cv}
          download="CV-Santa-Herizo-RAZAFINDRAKOTO.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-border transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <Download className="size-3.5" />
            <span className="hidden font-mono text-xs tracking-widest sm:inline">
              DOWNLOAD CV
            </span>
          </Button>
        </a>
      </div>
    </header>
  )
}

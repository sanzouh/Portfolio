import { Sun, Moon, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { links } from "@/data/portfolio"

export function Header() {
  const { theme, setTheme } = useTheme()
  const isDark = theme !== "light"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 border-b border-border/50 bg-background/90 backdrop-blur-sm">
      <span className="font-mono text-sm font-bold tracking-widest select-none">
        SH<span className="text-primary">·</span>RZ
      </span>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="hover:text-primary hover:bg-primary/10 transition-colors"
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
            className="gap-2 border-border hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline font-mono text-xs tracking-widest">
              DOWNLOAD CV
            </span>
          </Button>
        </a>
      </div>
    </header>
  )
}

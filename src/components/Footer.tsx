import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { links, owner } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 md:px-12 lg:px-24 py-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground/40 tracking-wide">
          © 2026 · {owner.name}
        </span>

        <div className="flex items-center gap-1">
          {[
            { href: links.github, icon: <GithubIcon className="size-4" />, label: "GitHub" },
            { href: links.linkedin, icon: <LinkedinIcon className="size-4" />, label: "LinkedIn", external: true },
            { href: `mailto:${links.email}`, icon: <Mail className="size-4" />, label: "Email" },
          ].map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex size-8 items-center justify-center rounded-sm text-muted-foreground/40 transition-colors hover:text-primary"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

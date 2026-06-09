import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

gsap.registerPlugin(ScrollTrigger)

// light mode disabled until polished — force dark
localStorage.setItem("theme", "dark")

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  </StrictMode>
)

import { Header } from "@/components/Header"
import { ScrollProgress } from "@/components/ScrollProgress"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { TechStack } from "@/components/sections/TechStack"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"
import { FloatingAgent } from "@/components/FloatingAgent"
import { useParallaxScroll } from "@/hooks/use-parallax-scroll"

export default function App() {
  useParallaxScroll()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollProgress />
      <main className="pt-14">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingAgent />
    </div>
  )
}

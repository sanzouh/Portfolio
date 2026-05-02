import { Header } from "@/components/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { TechStack } from "@/components/sections/TechStack"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-14">
        <Hero />
        <About />
        <Services />
        <TechStack />
      </main>
    </div>
  )
}

import { Header } from "@/components/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-14">
        <Hero />
        <About />
      </main>
    </div>
  )
}

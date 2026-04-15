import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HeroSection from "./components/sections/HeroSection"
import Focus01 from "./components/sections/Focus01"
import Focus02 from "./components/sections/Focus02"
import BeyondPixels from "./components/sections/BeyondPixels"
import FinalCTA from "./components/sections/FinalCTA"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Focus01 />
        <Focus02 />
        <BeyondPixels />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

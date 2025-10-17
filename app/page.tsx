import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CasinoRankings } from "@/components/casino-rankings"
import { HowWeRank } from "@/components/how-we-rank"
import { AboutUs } from "@/components/about-us"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      <Header />
      <Hero />
      <CasinoRankings />
      <AboutUs />
      <HowWeRank />
      <Footer />
      <CookieBanner />
      <CasinoModal />
    </div>
  )
}

"use client"

import { CasinoCard } from "@/components/casino-card"
import { casinos } from "@/data/casinos"

export function CasinoRankings() {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="rankings" className="py-8 relative bg-black/70">
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-4 md:space-y-6 max-w-[calc(72rem+50px)] mx-auto">
          {casinos.map((casino) => (
            <CasinoCard key={casino.rank} casino={casino} onClick={handleCardClick} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            * Aplicam-se os Termos e Condições. O jogo pode causar dependência. +18
          </p>
        </div>
      </div>
    </section>
  )
}

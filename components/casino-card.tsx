"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Casino } from "@/data/casinos"

interface CasinoCardProps {
  casino: Casino
  onClick: (url: string) => void
}

export function CasinoCard({ casino, onClick }: CasinoCardProps) {
  const renderStars = (rating: number, size = "h-4 w-4") => {
    // Convert rating from 0-10 scale to 0-5 stars scale
    const starRating = (rating / 10) * 5
    const fullStars = Math.floor(starRating)
    const partialFill = starRating - fullStars

    return [...Array(5)].map((_, i) => {
      if (i < fullStars) {
        // Full star
        return <Star key={i} className={`${size} text-amber-400 fill-amber-400`} />
      } else if (i === fullStars && partialFill > 0) {
        // Partial star
        const fillPercentage = Math.round(partialFill * 100)
        return (
          <div key={i} className="relative inline-block">
            <Star className={`${size} text-muted-foreground`} />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${size} text-amber-400 fill-amber-400`} />
            </div>
          </div>
        )
      } else {
        // Empty star
        return <Star key={i} className={`${size} text-muted-foreground`} />
      }
    })
  }

  return (
    <Card
      className={`casino-card cursor-pointer transition-all duration-300 relative overflow-hidden min-h-[120px] md:min-h-[140px] lg:min-h-[160px] ${
        casino.isTopChoice
          ? "ring-2 ring-amber-400 shadow-lg shadow-amber-400/20 border-amber-400"
          : "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
      }`}
      onClick={() => onClick(casino.url)}
      style={{
        backgroundColor: casino.isTopChoice ? "rgba(20, 20, 30, 0.95)" : "rgba(25, 25, 35, 0.92)",
      }}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-4 right-4 text-6xl text-amber-400/30">♠</div>
        <div className="absolute bottom-4 left-4 text-4xl text-red-500/30">♥</div>
        <div className="absolute top-1/2 left-1/4 text-3xl text-green-500/30">♣</div>
        <div className="absolute bottom-1/3 right-1/3 text-5xl text-red-600/30">♦</div>
      </div>

      {casino.isTopChoice && (
        <div className="absolute inset-0 border-2 border-amber-500/20 rounded-lg pointer-events-none"></div>
      )}

      <CardContent className="p-4 h-full flex items-center relative z-10">
        {casino.isTopChoice && (
          <Badge className="absolute -top-1 -left-1 bg-amber-600 text-white font-bold text-xs px-3 py-1 z-20 rounded-sm shadow-md border border-amber-400">
            MELHOR CASINO
          </Badge>
        )}
        {casino.rank === 2 && (
          <Badge className="absolute -top-1 -left-1 bg-red-600 text-white font-bold text-xs px-3 py-1 z-20 rounded-sm shadow-md">
            POPULAR
          </Badge>
        )}
        {casino.rank === 3 && (
          <Badge className="absolute -top-1 -left-1 bg-green-600 text-white font-bold text-xs px-3 py-1 z-20 rounded-sm shadow-md">
            TENDÊNCIAS
          </Badge>
        )}
        <div className="absolute inset-0 opacity-5 pointer-events-none portuguese-pattern"></div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-shrink-0">
              <div className="bg-black backdrop-blur-sm rounded-lg shadow-sm relative z-10 p-2">
                <img
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="h-12 object-contain max-w-[120px] w-auto"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-1 mt-2">
                <span className="text-foreground font-semibold text-sm">{casino.rating.toFixed(1)}</span>
                <div className="flex items-center">{renderStars(casino.rating, "h-4 w-4")}</div>
              </div>
            </div>
            <div className="text-center flex-1 ml-6">
              <div className="flex items-center justify-center gap-1 text-red-600 mb-2">
                <span className="text-sm font-medium">Bónus de Boas-Vindas</span>
              </div>
              <div className="text-slate-50 font-bold text-base leading-tight font-playfair p-2 rounded">
                {casino.bonus}
              </div>
              <div className="mt-3 text-center">
                <div className="flex flex-col items-center justify-center gap-1 mb-1">
                  <span className="text-foreground font-semibold text-sm">{casino.rating.toFixed(1)}</span>
                  <div className="flex items-center gap-1">{renderStars(casino.rating, "h-3 w-3")}</div>
                </div>
                <div className="text-xs text-muted-foreground">{casino.reviews.toLocaleString()} avaliações</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button
              className="font-semibold px-4 py-2 text-xs w-full max-w-xs relative z-10 shadow-lg transition-all duration-200 bg-green-600 hover:bg-green-700 text-white"
              onClick={(e) => {
                e.stopPropagation()
                onClick(casino.url)
              }}
            >
              JOGAR AGORA
            </Button>
            <p className="text-xs text-muted-foreground mt-1">18+ Jogo Responsável</p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden w-full">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-shrink-0" style={{ width: "180px" }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg flex-shrink-0 shadow-md bg-amber-600 text-white relative z-10">
                {casino.rank}
              </div>
              <div className="text-center flex-1">
                <div className="bg-black backdrop-blur-sm rounded-lg shadow-sm mb-2 mx-auto w-fit relative z-10 p-2">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    className="h-12 object-contain max-w-[100px] w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="text-center flex-shrink-0" style={{ width: "380px" }}>
              <div className="flex items-center justify-center gap-1 text-red-600 mb-2">
                <span className="text-sm font-medium">Bónus de Boas-vindas</span>
              </div>
              <div className="text-slate-50 font-bold text-lg leading-tight font-playfair">{casino.bonus}</div>
            </div>
            <div className="text-center flex-shrink-0" style={{ width: "120px" }}>
              <div className="text-foreground font-semibold text-sm mb-1">{casino.rating.toFixed(1)}</div>
              <div className="flex items-center justify-center gap-1 mb-1">{renderStars(casino.rating, "h-5 w-5")}</div>
              <div className="text-xs text-muted-foreground">{casino.reviews.toLocaleString()} avaliações</div>
            </div>
            <div className="flex flex-col gap-2 flex-1 min-h-[80px] justify-center" style={{ maxWidth: "180px" }}>
              {casino.features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="trust-badge text-xs px-2 py-1 text-center justify-center w-full relative z-10 font-medium"
                >
                  {feature}
                </Badge>
              ))}
            </div>
            <div className="flex-shrink-0" style={{ width: "120px" }}>
              <Button
                className="font-semibold px-2 py-3 text-xs w-full h-auto relative z-10 shadow-lg transition-all duration-200 bg-green-600 hover:bg-green-700 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  onClick(casino.url)
                }}
              >
                JOGAR AGORA
              </Button>
              <p className="text-xs text-muted-foreground mt-1 text-center">18+ Jogo Responsável</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block w-full">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-shrink-0" style={{ width: "240px" }}>
              <div className="flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl flex-shrink-0 shadow-lg bg-amber-600 text-white relative z-10">
                {casino.rank}
              </div>
              <div className="text-center flex-1">
                <div className="bg-black backdrop-blur-sm rounded-lg shadow-md mb-3 mx-auto w-fit relative z-10 p-3">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    className="h-20 object-contain max-w-[160px] w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="text-center flex-shrink-0" style={{ width: "400px" }}>
              <div className="flex items-center justify-center gap-2 text-red-600 mb-3">
                <span className="text-lg font-medium">Bónus de Boas-Vindas</span>
              </div>
              <div className="font-bold font-playfair leading-tight text-2xl p-3 rounded-lg text-slate-50">
                {casino.bonus}
              </div>
            </div>

            <div className="text-center flex-shrink-0" style={{ width: "120px" }}>
              <div className="text-foreground font-semibold text-lg mb-1">{casino.rating.toFixed(1)}</div>
              <div className="flex items-center justify-center gap-1 mb-1">{renderStars(casino.rating, "h-6 w-6")}</div>
              <div className="text-sm text-muted-foreground">{casino.reviews.toLocaleString()} avaliações</div>
            </div>

            <div className="flex-shrink-0" style={{ width: "140px" }}>
              <Button
                className="font-semibold px-3 py-4 text-sm w-full h-auto relative z-10 shadow-lg transition-all duration-200 bg-green-600 hover:bg-green-700 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  onClick(casino.url)
                }}
              >
                JOGAR AGORA
              </Button>
              <p className="text-xs text-muted-foreground mt-1 text-center">18+ Jogo Responsável</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { casinos } from "@/data/casinos"

export function TopChoice() {
  const topCasino = casinos[0] // Get the first casino (rank 1)

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const renderStars = (rating: number, size = "h-4 w-4") => {
    const filledStars = Math.round((rating / 10) * 5)
    return [...Array(5)].map((_, i) => {
      const filled = i < filledStars
      return (
        <Star key={i} className={`${size} ${filled ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}`} />
      )
    })
  }

  return (
    <section className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-red-600">A Nossa Escolha</span> <span className="text-green-600">Principal</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Depois de analisar dezenas de casinos online em Portugal, selecionamos o melhor casino para si.
              Licenciado, seguro e com os melhores bónus de boas-vindas.
            </p>
          </div>

          {/* Top Casino Card - Reusing the same card from rankings */}
          <Card
            className="casino-card cursor-pointer transition-all duration-300 relative overflow-hidden min-h-[120px] md:min-h-[140px] lg:min-h-[160px] ring-2 ring-amber-400 shadow-lg shadow-amber-400/20 border-amber-400"
            onClick={() => handleCardClick(topCasino.url)}
            style={{
              backgroundColor: "rgba(20, 20, 30, 0.95)",
            }}
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-4 right-4 text-6xl text-amber-400/30">♠</div>
              <div className="absolute bottom-4 left-4 text-4xl text-red-500/30">♥</div>
              <div className="absolute top-1/2 left-1/4 text-3xl text-green-500/30">♣</div>
              <div className="absolute bottom-1/3 right-1/3 text-5xl text-red-600/30">♦</div>
            </div>

            <div className="absolute inset-0 border-2 border-amber-500/20 rounded-lg pointer-events-none"></div>

            <CardContent className="p-4 h-full flex items-center relative z-10">
              <Badge className="absolute -top-1 -left-1 bg-amber-600 text-white font-bold text-xs px-3 py-1 z-20 rounded-sm shadow-md border border-amber-400">
                MELHOR CASINO
              </Badge>
              <div className="absolute inset-0 opacity-5 pointer-events-none portuguese-pattern"></div>

              {/* Mobile Layout */}
              <div className="md:hidden w-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-black backdrop-blur-sm rounded-lg shadow-sm relative z-10 p-2">
                      <img
                        src={topCasino.logo || "/placeholder.svg"}
                        alt={`${topCasino.name} logo`}
                        className="h-12 object-contain max-w-[120px] w-auto"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="flex items-center">{renderStars(topCasino.rating, "h-3 w-3")}</div>
                      <span className="text-foreground font-semibold text-sm">{topCasino.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-center flex-1 ml-6">
                    <div className="flex items-center justify-center gap-1 text-red-600 mb-2">
                      <span className="text-sm font-medium">Bónus de Boas-Vindas</span>
                    </div>
                    <div className="text-slate-50 font-bold text-base leading-tight font-playfair p-2 rounded bg-primary/10">
                      {topCasino.bonus}
                    </div>
                    <div className="mt-3 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        {renderStars(topCasino.rating, "h-3 w-3")}
                        <span className="text-foreground font-semibold text-sm ml-2">
                          {topCasino.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {topCasino.reviews.toLocaleString()} avaliações
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    className="font-semibold px-4 py-2 text-xs w-full max-w-xs relative z-10 shadow-lg transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(topCasino.url)
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
                    <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg flex-shrink-0 shadow-md bg-primary text-primary-foreground relative z-10">
                      {topCasino.rank}
                    </div>
                    <div className="text-center flex-1">
                      <div className="bg-black backdrop-blur-sm rounded-lg shadow-sm mb-2 mx-auto w-fit relative z-10 p-2">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-12 object-contain max-w-[100px] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex-shrink-0" style={{ width: "380px" }}>
                    <div className="flex items-center justify-center gap-1 text-red-600 mb-2">
                      <span className="text-sm font-medium">Bónus de Boas-vindas</span>
                    </div>
                    <div className="text-slate-50 font-bold text-lg leading-tight font-playfair">{topCasino.bonus}</div>
                  </div>
                  <div className="text-center flex-shrink-0" style={{ width: "120px" }}>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {renderStars(topCasino.rating, "h-4 w-4")}
                    </div>
                    <div className="text-foreground font-semibold text-sm">{topCasino.rating.toFixed(1)}</div>
                    <div className="text-xs text-muted-foreground">{topCasino.reviews.toLocaleString()} avaliações</div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-h-[80px] justify-center" style={{ maxWidth: "180px" }}>
                    {topCasino.features.map((feature, index) => (
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
                      className="font-semibold px-2 py-3 text-xs w-full h-auto relative z-10 shadow-lg transition-all duration-200 bg-red-700 hover:bg-red-800 text-white border-red-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
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
                    <div className="flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl flex-shrink-0 shadow-lg bg-primary text-primary-foreground relative z-10">
                      {topCasino.rank}
                    </div>
                    <div className="text-center flex-1">
                      <div className="bg-black backdrop-blur-sm rounded-lg shadow-md mb-3 mx-auto w-fit relative z-10 p-3">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-20 object-contain max-w-[160px] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex-shrink-0" style={{ width: "400px" }}>
                    <div className="flex items-center justify-center gap-2 text-red-600 mb-3">
                      <span className="text-lg font-medium">Bónus de Boas-Vindas</span>
                    </div>
                    <div className="font-bold font-playfair leading-tight text-2xl bg-primary/10 p-3 rounded-lg text-slate-50">
                      {topCasino.bonus}
                    </div>
                  </div>

                  <div className="text-center flex-shrink-0" style={{ width: "120px" }}>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {renderStars(topCasino.rating, "h-4 w-4")}
                    </div>
                    <div className="text-foreground font-semibold text-lg">{topCasino.rating.toFixed(1)}</div>
                    <div className="text-sm text-muted-foreground">{topCasino.reviews.toLocaleString()} avaliações</div>
                  </div>

                  <div className="flex-shrink-0" style={{ width: "140px" }}>
                    <Button
                      className="font-semibold px-3 py-4 text-sm w-full h-auto relative z-10 shadow-lg transition-all duration-200 bg-red-700 hover:bg-red-800 text-white border-red-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
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

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              * Aplicam-se os Termos e Condições. O jogo pode causar dependência. +18
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Star, Gift, Sparkles } from "lucide-react"
import { getTopCasino } from "@/data/casinos"

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  const filledStars = Math.round((topCasino.rating / 10) * 5)
  const reviewCount = topCasino.reviews

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative w-full max-w-md">
        <Card className="bg-black border-4 border-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-padding shadow-2xl relative overflow-hidden mt-4">
          <div className="bg-black m-[3px] rounded-[calc(0.5rem-3px)]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-amber-400 z-20 bg-slate-950/80 rounded-full p-1.5 transition-colors hover:bg-slate-900 border border-slate-700"
            >
              <X className="h-4 w-4" />
            </button>

            <CardContent className="p-6 text-center relative z-10">
              <div className="mb-6 mt-4">
                <div className="bg-slate-950/50 rounded-lg p-4 mx-auto w-fit border border-amber-900/30 shadow-lg shadow-amber-900/20">
                  <img
                    src={topCasino.logo || "/placeholder.svg"}
                    alt={`${topCasino.name} logo`}
                    className="h-24 w-48 w-auto mx-auto"
                  />
                </div>
              </div>

              <div className="mb-6 relative">
                <div className="relative overflow-hidden rounded-xl border-2 border-amber-500/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-400/30 rounded-tl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-400/30 rounded-br-xl"></div>

    
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-3">

                      <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Bónus Exclusivo</p>

                    </div>

                    <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                      <div className="font-bold text-3xl leading-tight mb-1">{topCasino.bonus}</div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-amber-900/30">
                      <p className="text-slate-300 text-xs">Oferta de Boas-Vindas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                              <div className="text-lg font-semibold text-white mb-1">{topCasino.rating.toFixed(1)}/10</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${i < filledStars ? "text-amber-400 fill-current" : "text-slate-600"}`}
                    />
                  ))}
                </div>

                <div className="text-xs text-slate-400">{reviewCount.toLocaleString()} avaliações</div>
              </div>

              <Button
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-semibold py-3 px-8 text-base transition-colors border border-amber-400 w-auto mx-auto shadow-lg shadow-amber-900/30"
                onClick={(e) => {
                  e.stopPropagation()
                  handleModalClick()
                }}
              >
                Jogar {topCasino.name}
              </Button>

              <p className="text-xs text-slate-500 text-center mt-3">18+ Jogo Responsável</p>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  )
}

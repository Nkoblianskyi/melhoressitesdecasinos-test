"use client"
import Image from "next/image"
import { Award, Shield } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const currentDate = new Date()
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <>
      <section className="relative overflow-hidden h-[250px] md:h-[350px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-casino-bg.jpg')", backgroundPosition: "center center" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="w-full max-w-5xl flex flex-col justify-center items-center gap-4 h-full py-3 md:py-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-playfair leading-tight">
                <span className="text-red-600">Os Melhores </span>
                <span className="text-green-600">Casinos Online </span>
                <span className="text-red-600">de Portugal</span>
              </h1>

              <p className="hidden md:block text-sm md:text-base text-slate-200 mt-2 max-w-2xl mx-auto leading-snug">
                Rankings exclusivos e bónus verificados dos casinos mais confiáveis para jogadores portugueses
              </p>
            </div>

            <div className="text-center space-y-2">
              {/* Update date */}
              <p className="text-[10px] md:text-xs text-slate-400 font-medium">
                Última atualização: {currentDate.getDate()} de {currentMonth} de {currentYear}
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-green-600/30">
                  <Image src="/srij.svg" alt="srij" width={32} height={32} />
                  <span className="text-[9px] md:text-xs text-slate-200 font-medium">Licenciados SRIJ</span>
                </div>

                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-green-600/30">
                  <Image src="/flag.png" alt="flag"  width={18} height={18} />
                  <span className="text-[9px] md:text-xs text-slate-200 font-medium">Testados & Aprovados</span>
                </div>

                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-green-600/30">
                  <Award className="w-3 h-3 md:w-4 md:h-4 text-amber-500" />
                  <span className="text-[9px] md:text-xs text-slate-200 font-medium">Pagamentos Seguros</span>
                </div>

                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-green-600/30">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                  <span className="text-[9px] md:text-xs text-slate-200 font-medium">Suporte 24/7</span>
                </div>
              </div>

              {/* Responsible gaming and policies */}
              <div className="pt-1">
                <p className="text-[10px] md:text-xs text-slate-300 mb-1">
                  Jogue com responsabilidade. O jogo pode causar dependência. +18
                </p>
                <div className="flex items-center justify-center gap-2 md:gap-3 text-[9px] md:text-[10px]">
                  <Link
                    href="/privacy-policy"
                    className="text-slate-400 hover:text-green-500 transition-colors underline"
                  >
                    Política de Privacidade
                  </Link>
                  <span className="text-slate-600">|</span>
                  <Link
                    href="/cookie-policy"
                    className="text-slate-400 hover:text-green-500 transition-colors underline"
                  >
                    Política de Cookies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

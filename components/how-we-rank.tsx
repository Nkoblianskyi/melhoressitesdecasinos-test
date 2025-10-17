"use client"

import { Shield, Gamepad2, Gift, Headphones, CreditCard, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CasinoCard } from "@/components/casino-card"
import { getTopCasino } from "@/data/casinos"

export function HowWeRank() {
  const criteria = [
    {
      title: "Licença & Segurança",
      description:
        "Verificamos rigorosamente todas as licenças emitidas pela SRIJ (Serviço de Regulação e Inspeção de Jogos) e autoridades internacionais reconhecidas. Analisamos protocolos de segurança SSL 256-bit, certificações de auditoria independente (eCOGRA, iTech Labs) e políticas de proteção de dados conforme RGPD.",
      weight: "25%",
      icon: Shield,
    },
    {
      title: "Seleção de Jogos",
      description:
        "Avaliamos a diversidade e qualidade do catálogo: slots (mínimo 1000+ títulos), jogos de mesa clássicos (blackjack, roleta, bacará), poker online, casino ao vivo com dealers reais e fornecedores premium como NetEnt, Microgaming, Pragmatic Play, Evolution Gaming e Playtech.",
      weight: "20%",
      icon: Gamepad2,
    },
    {
      title: "Bónus & Promoções",
      description:
        "Analisamos detalhadamente os bónus de boas-vindas, requisitos de apostas (rollover máximo 35x), promoções semanais e mensais, cashback, torneios, programas VIP com recompensas exclusivas e total transparência nos termos e condições sem letras pequenas enganosas.",
      weight: "20%",
      icon: Gift,
    },
    {
      title: "Apoio ao Cliente",
      description:
        "Testamos pessoalmente o chat ao vivo 24/7, suporte em português europeu, tempo médio de resposta (máximo 2 minutos), qualidade e profissionalismo das respostas, disponibilidade de suporte telefónico, email e FAQ completo com soluções para problemas comuns.",
      weight: "15%",
      icon: Headphones,
    },
    {
      title: "Métodos de Pagamento",
      description:
        "Verificamos a disponibilidade de MB Way, Multibanco, transferência bancária, cartões de crédito/débito (Visa, Mastercard), e-wallets (Skrill, Neteller), criptomoedas, tempos de processamento de levantamentos (ideal 24h), limites de depósito/levantamento e ausência total de taxas ocultas.",
      weight: "10%",
      icon: CreditCard,
    },
    {
      title: "Experiência do Utilizador",
      description:
        "Avaliamos design moderno e intuitivo, velocidade de carregamento das páginas (máximo 3 segundos), navegação fluida, compatibilidade total com dispositivos móveis (iOS e Android), aplicação nativa, funcionalidades de jogo responsável (limites de depósito, auto-exclusão) e acessibilidade.",
      weight: "10%",
      icon: Smartphone,
    },
  ]

  const topCasino = getTopCasino()

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-12 md:py-16 bg-black/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Como <span className="text-red-600">Avaliamos</span> os <span className="text-green-600">Casinos</span>
          </h2>
          <div className="text-sm md:text-base text-gray-300 max-w-5xl mx-auto space-y-4 leading-relaxed">
            <p className="text-base md:text-lg">
              A nossa equipa de especialistas em jogos online, com mais de 15 anos de experiência combinada, utiliza um
              sistema de avaliação rigoroso, transparente e abrangente para testar minuciosamente todos os aspetos dos
              casinos online legais em Portugal.
            </p>
            <p>
              Cada casino é submetido a mais de 50 testes diferentes ao longo de várias semanas de análise intensiva.
              Não nos baseamos apenas em especificações técnicas - testamos pessoalmente cada plataforma como jogadores
              reais, fazemos depósitos com o nosso próprio dinheiro, jogamos centenas de jogos diferentes, contactamos o
              apoio ao cliente com questões reais e processamos levantamentos para garantir que a nossa avaliação
              reflete fielmente a experiência autêntica dos jogadores portugueses.
            </p>
            <p className="text-amber-400 font-semibold text-base md:text-lg bg-amber-400/10 border border-amber-400/30 rounded-lg p-4">
              ⭐ Apenas casinos que pontuam acima de 8.0/10 na nossa escala rigorosa são recomendados aos nossos
              utilizadores. A sua segurança e satisfação são a nossa prioridade absoluta.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon
            return (
              <Card
                key={index}
                className="bg-slate-900/90 border-slate-700 hover:border-green-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/10"
              >
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-green-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1">{criterion.title}</h3>
                      <Badge className="bg-amber-600/20 text-amber-400 border border-amber-600/40 font-semibold text-xs">
                        Peso: {criterion.weight}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{criterion.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            A Nossa <span className="text-red-600">Escolha</span> <span className="text-green-600">Principal</span>
          </h2>
          <div className="text-sm md:text-base text-gray-300 max-w-5xl mx-auto space-y-4 leading-relaxed">
            <p className="text-base md:text-lg">
              Depois de avaliar rigorosamente mais de 200 casinos online disponíveis para jogadores portugueses, este
              casino destaca-se como a nossa recomendação número 1 absoluta para 2024. Combina perfeitamente segurança
              máxima, variedade excepcional de jogos e bónus generosos.
            </p>
            <p>
              Este casino obteve a pontuação mais elevada em todas as nossas categorias de avaliação, demonstrando
              excelência consistente em licenciamento SRIJ, proteção de dados, qualidade de suporte em português 24/7 e
              experiência de utilizador otimizada. É a escolha perfeita tanto para iniciantes como para jogadores
              experientes que procuram uma plataforma confiável e emocionante.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6">
              <div className="bg-green-900/40 border-2 border-green-600 rounded-lg px-4 md:px-6 py-2 md:py-3 shadow-lg shadow-green-600/20">
                <span className="text-green-400 font-bold text-xs md:text-sm">✓ LICENÇA SRIJ VÁLIDA</span>
              </div>
              <div className="bg-amber-900/40 border-2 border-amber-600 rounded-lg px-4 md:px-6 py-2 md:py-3 shadow-lg shadow-amber-600/20">
                <span className="text-amber-400 font-bold text-xs md:text-sm">✓ LEVANTAMENTOS 24H</span>
              </div>
              <div className="bg-red-900/40 border-2 border-red-600 rounded-lg px-4 md:px-6 py-2 md:py-3 shadow-lg shadow-red-600/20">
                <span className="text-red-400 font-bold text-xs md:text-sm">✓ SUPORTE PORTUGUÊS 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 max-w-[calc(72rem+50px)] mx-auto">
          <CasinoCard casino={topCasino} onClick={handleCardClick} />
        </div>
      </div>
    </section>
  )
}

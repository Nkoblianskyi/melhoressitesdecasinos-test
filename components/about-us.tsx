import { Shield, Award, Users, TrendingUp } from "lucide-react"

export function AboutUs() {
  return (
    <section className="py-16 md:py-24 relative bg-black/70">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-600">Sobre</span> <span className="text-green-600">Nós</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              O seu guia de confiança para os melhores casinos online em Portugal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left column - Main description */}
            <div className="bg-slate-900/90 backdrop-blur-sm border border-green-600/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-500 mb-4">Quem Somos</h3>
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p>
                  Bem-vindo ao <span className="text-green-500 font-semibold">MelhoresSitesDeCasinos</span>, a
                  referência em Portugal para análises profissionais de casinos online.
                </p>
                <p>
                  Somos uma equipa de especialistas apaixonados por jogos online, com anos de experiência na indústria.
                  Testamos, analisamos e classificamos cada casino com rigor e imparcialidade.
                </p>
                <p>
                  A nossa missão é garantir que cada jogador português tenha acesso a informação clara, honesta e
                  atualizada sobre os melhores casinos online licenciados e seguros.
                </p>
              </div>
            </div>

            {/* Right column - Mission statement */}
            <div className="bg-slate-900/90 backdrop-blur-sm border border-red-600/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-500 mb-4">A Nossa Missão</h3>
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p>
                  Fornecer análises detalhadas e imparciais que ajudam jogadores a tomar decisões informadas e seguras.
                </p>
                <p>
                  Cada casino que recomendamos passa por testes rigorosos: verificamos licenças, testamos jogos,
                  avaliamos bónus, analisamos métodos de pagamento e testamos o suporte ao cliente.
                </p>
                <p className="text-green-400 font-semibold">Só recomendamos casinos que nós próprios usaríamos.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-green-600/30 rounded-lg p-6 text-center hover:border-green-500/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-green-500 mb-3">Segurança</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Só recomendamos casinos licenciados pelo SRIJ e com certificações de segurança reconhecidas.
              </p>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-sm border border-red-600/30 rounded-lg p-6 text-center hover:border-red-500/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <Award className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-red-500 mb-3">Transparência</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Análises honestas baseadas em testes reais. A nossa integridade nunca está à venda.
              </p>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-sm border border-amber-600/30 rounded-lg p-6 text-center hover:border-amber-500/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="text-xl font-bold text-amber-500 mb-3">Experiência</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Anos de conhecimento profundo da indústria e acompanhamento constante das tendências.
              </p>
            </div>

            <div className="bg-slate-900/90 backdrop-blur-sm border border-blue-600/30 rounded-lg p-6 text-center hover:border-blue-500/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-xl font-bold text-blue-500 mb-3">Suporte</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Estamos aqui para ajudar. Dúvidas sobre casinos? Contacte-nos a qualquer momento.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-green-600/30 rounded-lg p-8 max-w-3xl mx-auto">
              <p className="text-lg text-slate-200 leading-relaxed mb-4">
                Junte-se a <span className="text-green-500 font-bold">milhares de jogadores</span> que confiam em nós
                para encontrar os melhores casinos online em Portugal.
              </p>
              <p className="text-amber-500 font-semibold text-sm">
                Jogue com responsabilidade. Divirta-se com segurança. +18
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

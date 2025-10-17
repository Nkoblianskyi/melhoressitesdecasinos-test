import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-red-600">Política de</span> <span className="text-green-600">Cookies</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-slate-900 border border-green-600/20 rounded-lg p-6 md:p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">O que são Cookies?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita o
                  melhoressitesdecasinos.com. Estes ficheiros ajudam-nos a melhorar a sua experiência de navegação,
                  recordar as suas preferências e fornecer-lhe conteúdo personalizado sobre os melhores casinos online
                  em Portugal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Tipos de Cookies Utilizados</h2>

                <div className="space-y-6">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-3">1. Cookies Essenciais</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Necessários para o funcionamento básico do website. Permitem navegação segura, acesso às
                      classificações de casinos e funcionalidades de comparação. Estes cookies não podem ser desativados
                      sem comprometer a funcionalidade do site.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      <strong>Exemplos:</strong> Sessão de utilizador, preferências de idioma, consentimento de cookies
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-3">2. Cookies de Análise</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Recolhem informações sobre como utiliza o nosso site de classificações de casinos. Ajudam-nos a
                      compreender quais casinos são mais populares, que páginas são mais visitadas e a melhorar as
                      nossas recomendações com base no comportamento dos utilizadores.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      <strong>Exemplos:</strong> Google Analytics, estatísticas de visitas, tempo de permanência
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-3">3. Cookies de Personalização</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Recordam as suas preferências de casinos, jogos favoritos e critérios de pesquisa para
                      personalizar a sua experiência no melhoressitesdecasinos.com. Permitem-nos mostrar conteúdo
                      relevante baseado nos seus interesses.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      <strong>Exemplos:</strong> Casinos favoritos, filtros de pesquisa, histórico de visualizações
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-3">4. Cookies de Afiliação</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Rastreiam as suas visitas aos casinos parceiros através dos nossos links para garantir que recebe
                      os melhores bónus e ofertas disponíveis. Estes cookies também nos permitem receber comissões dos
                      casinos quando se regista através dos nossos links, sem qualquer custo adicional para si.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      <strong>Exemplos:</strong> Links de afiliação, tracking de conversões, códigos promocionais
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Gestão de Cookies</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Pode controlar e gerir os cookies das seguintes formas:
                </p>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>Aceitar ou rejeitar cookies através do nosso banner de consentimento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>Configurar as definições do seu navegador para bloquear ou alertar sobre cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>Eliminar cookies existentes a qualquer momento através do seu navegador</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">✓</span>
                      <span>Desativar cookies de terceiros nas definições do navegador</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4 mt-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-500">Nota Importante:</strong> Desativar cookies pode afetar
                    significativamente a funcionalidade do site e a qualidade das nossas recomendações de casinos.
                    Algumas funcionalidades podem não estar disponíveis sem cookies essenciais.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Cookies de Terceiros</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Utilizamos serviços de terceiros para melhorar a sua experiência e fornecer funcionalidades
                  adicionais:
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-yellow-500">Google Analytics:</strong> Para análise de tráfego e
                      comportamento dos utilizadores
                    </p>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-yellow-500">Casinos Parceiros:</strong> Para rastreamento de afiliação e
                      ofertas personalizadas
                    </p>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-yellow-500">Redes Sociais:</strong> Para partilha de conteúdo e integração
                      social
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Estes serviços têm as suas próprias políticas de privacidade e cookies. Recomendamos que consulte as
                  políticas de cada serviço para mais informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Duração dos Cookies</h2>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                  <ul className="text-gray-300 space-y-3">
                    <li>
                      <strong className="text-yellow-500">Cookies de Sessão:</strong> Eliminados quando fecha o
                      navegador
                    </li>
                    <li>
                      <strong className="text-yellow-500">Cookies Persistentes:</strong> Permanecem no seu dispositivo
                      por um período definido (até 2 anos)
                    </li>
                    <li>
                      <strong className="text-yellow-500">Cookies de Afiliação:</strong> Válidos por 30-90 dias após o
                      clique
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Atualizações da Política</h2>
                <p className="text-gray-300 leading-relaxed">
                  Esta política pode ser atualizada periodicamente para refletir mudanças nos nossos serviços,
                  regulamentações ou práticas de cookies. Recomendamos que consulte esta página regularmente para se
                  manter informado sobre como utilizamos cookies.
                </p>
                <p className="text-gray-400 text-sm mt-3">
                  <strong>Última atualização:</strong> Janeiro 2025
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Contacto</h2>
                <div className="bg-slate-800/50 border border-green-600/30 rounded-lg p-5">
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Para questões, dúvidas ou pedidos relacionados com cookies, pode contactar-nos através de:
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-yellow-500">Email:</strong>{" "}
                    <a
                      href="mailto:cookies@melhoressitesdecasinos.com"
                      className="text-green-500 hover:text-green-400 transition-colors"
                    >
                      cookies@melhoressitesdecasinos.com
                    </a>
                  </p>
                  <p className="text-gray-400 text-sm mt-3">Responderemos ao seu pedido no prazo de 30 dias úteis.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

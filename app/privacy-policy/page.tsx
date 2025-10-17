import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-red-600">Política de</span> <span className="text-green-600">Privacidade</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-slate-900 border border-green-600/20 rounded-lg p-6 md:p-8 space-y-8">
              <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-5">
                <p className="text-gray-300 leading-relaxed">
                  O <strong className="text-green-500">melhoressitesdecasinos.com</strong> está comprometido com a
                  proteção da sua privacidade. Esta política explica como recolhemos, utilizamos e protegemos os seus
                  dados pessoais em conformidade com o Regulamento Geral de Proteção de Dados (RGPD) e a legislação
                  portuguesa.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">1. Informações que Recolhemos</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Para fornecer as melhores classificações e recomendações de casinos online em Portugal, recolhemos os
                  seguintes tipos de informação:
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Dados de Contacto</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Nome, endereço de email e outras informações fornecidas quando subscreve newsletters, cria uma
                      conta ou nos contacta.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Dados de Navegação</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Páginas visitadas, casinos consultados, tempo de permanência no site, origem do tráfego e padrões
                      de navegação.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Preferências de Utilizador</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Jogos favoritos, critérios de pesquisa de casinos, casinos marcados como favoritos e histórico de
                      visualizações.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Dados Técnicos</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Endereço IP, tipo de navegador, sistema operativo, dispositivo utilizado, resolução de ecrã e
                      localização geográfica aproximada.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Dados de Afiliação</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Cliques em links de casinos parceiros, conversões, registos através dos nossos links e utilização
                      de códigos promocionais.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">2. Como Utilizamos os Seus Dados</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Os seus dados são utilizados exclusivamente para os seguintes fins legítimos:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-yellow-500">Classificações Precisas:</strong>
                      <p className="text-gray-300 mt-1">
                        Melhorar e atualizar as nossas avaliações de casinos com base em feedback e comportamento dos
                        utilizadores
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-yellow-500">Recomendações Personalizadas:</strong>
                      <p className="text-gray-300 mt-1">
                        Sugerir casinos e jogos adequados ao seu perfil e preferências de jogo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-yellow-500">Comunicações:</strong>
                      <p className="text-gray-300 mt-1">
                        Enviar alertas sobre novos casinos, bónus exclusivos e atualizações importantes (apenas com o
                        seu consentimento)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-yellow-500">Análise de Tendências:</strong>
                      <p className="text-gray-300 mt-1">
                        Compreender preferências dos jogadores portugueses e tendências do mercado de casinos online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-yellow-500">Segurança:</strong>
                      <p className="text-gray-300 mt-1">
                        Proteger contra fraudes, atividades suspeitas e garantir a integridade do site
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <span className="text-green-600 mr-3 mt-1 text-xl">✓</span>
                    <div>
                      <strong className="text-yellow-500">Parcerias:</strong>
                      <p className="text-gray-300 mt-1">
                        Negociar melhores ofertas e bónus exclusivos com casinos licenciados para os nossos utilizadores
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">3. Partilha de Informações</h2>
                <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-5 mb-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-500">Compromisso:</strong> Nunca vendemos, alugamos ou comercializamos
                    os seus dados pessoais a terceiros.
                  </p>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  Podemos partilhar informações limitadas apenas nas seguintes circunstâncias:
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Casinos Parceiros</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Apenas dados necessários para processar ofertas exclusivas e bónus quando clica nos nossos links
                      de afiliação. Os casinos parceiros estão obrigados a proteger os seus dados.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Fornecedores de Serviços</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Empresas que nos ajudam com análise de dados, email marketing e hospedagem. Todos os fornecedores
                      estão sob contrato e obrigados a proteger os seus dados.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-3">Autoridades Legais</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Quando exigido por lei, regulamentação, processo legal ou pedido governamental válido.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">4. Segurança e Proteção de Dados</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Implementamos medidas de segurança rigorosas para proteger os seus dados pessoais:
                </p>

                <div className="bg-slate-800/50 border border-green-600/30 rounded-lg p-5">
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">🔒</span>
                      <span>
                        <strong>Encriptação SSL/TLS:</strong> Todas as comunicações são encriptadas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">🔒</span>
                      <span>
                        <strong>Armazenamento Seguro:</strong> Dados armazenados em servidores protegidos na UE
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">🔒</span>
                      <span>
                        <strong>Acesso Restrito:</strong> Apenas pessoal autorizado tem acesso aos dados pessoais
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">🔒</span>
                      <span>
                        <strong>Monitorização Contínua:</strong> Sistemas de deteção de intrusões e ameaças
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">🔒</span>
                      <span>
                        <strong>Backups Regulares:</strong> Cópias de segurança para prevenir perda de dados
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">🔒</span>
                      <span>
                        <strong>Auditorias de Segurança:</strong> Revisões periódicas das nossas práticas de segurança
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Os seus dados são tratados com o mesmo nível de segurança que exigimos dos casinos que recomendamos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">5. Os Seus Direitos (RGPD)</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Como residente na União Europeia, tem os seguintes direitos sobre os seus dados pessoais:
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Direito de Acesso</h3>
                    <p className="text-gray-300">
                      Consultar todos os dados pessoais que temos sobre si e obter uma cópia dos mesmos
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Direito de Retificação</h3>
                    <p className="text-gray-300">Corrigir informações incorretas, incompletas ou desatualizadas</p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Direito ao Apagamento</h3>
                    <p className="text-gray-300">
                      Solicitar a eliminação dos seus dados pessoais ("direito a ser esquecido")
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Direito à Portabilidade</h3>
                    <p className="text-gray-300">
                      Receber os seus dados em formato estruturado e transferi-los para outro serviço
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Direito de Oposição</h3>
                    <p className="text-gray-300">
                      Opor-se ao processamento dos seus dados para marketing direto ou outros fins
                    </p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Direito à Limitação</h3>
                    <p className="text-gray-300">Restringir o processamento dos seus dados em certas circunstâncias</p>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Direito de Retirar Consentimento</h3>
                    <p className="text-gray-300">Retirar o consentimento dado anteriormente a qualquer momento</p>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-5 mt-4">
                  <p className="text-gray-300 leading-relaxed">
                    Para exercer qualquer um destes direitos, contacte-nos através do email indicado na secção de
                    contacto. Responderemos no prazo de 30 dias.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">6. Retenção de Dados</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Mantemos os seus dados apenas pelo tempo necessário para os fins descritos nesta política:
                </p>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                  <ul className="text-gray-300 space-y-3">
                    <li>
                      <strong className="text-yellow-500">Dados de Navegação:</strong> Mantidos por 2 anos para análise
                      de tendências
                    </li>
                    <li>
                      <strong className="text-yellow-500">Dados de Contacto:</strong> Mantidos até cancelar a subscrição
                      ou solicitar eliminação
                    </li>
                    <li>
                      <strong className="text-yellow-500">Dados de Afiliação:</strong> Mantidos por 5 anos para fins
                      contabilísticos e fiscais
                    </li>
                    <li>
                      <strong className="text-yellow-500">Preferências:</strong> Mantidas enquanto a conta estiver ativa
                    </li>
                    <li>
                      <strong className="text-yellow-500">Dados Técnicos:</strong> Anonimizados após 12 meses
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Após estes períodos, os dados são eliminados de forma segura ou anonimizados para fins estatísticos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">7. Jogo Responsável</h2>
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-5">
                  <p className="text-gray-300 leading-relaxed mb-3">
                    O <strong className="text-yellow-500">melhoressitesdecasinos.com</strong> promove ativamente o jogo
                    responsável e a proteção de jogadores vulneráveis.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Não recolhemos dados sobre hábitos de jogo individuais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Fornecemos informações sobre ferramentas de jogo responsável</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Recomendamos apenas casinos licenciados com políticas de jogo responsável</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>Disponibilizamos links para organizações de apoio a jogadores problemáticos</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">8. Transferências Internacionais</h2>
                <p className="text-gray-300 leading-relaxed">
                  Os seus dados são armazenados e processados principalmente em servidores localizados na União
                  Europeia. Se for necessário transferir dados para fora da UE, garantimos que existem salvaguardas
                  adequadas em conformidade com o RGPD, como cláusulas contratuais padrão aprovadas pela Comissão
                  Europeia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">9. Menores de Idade</h2>
                <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-5">
                  <p className="text-gray-300 leading-relaxed">
                    O nosso site não se destina a menores de 18 anos. Não recolhemos intencionalmente dados de menores.
                    Se tomar conhecimento que um menor forneceu dados pessoais, contacte-nos imediatamente para que
                    possamos eliminar essas informações.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">10. Contacto e Reclamações</h2>
                <div className="bg-slate-800/50 border border-green-600/30 rounded-lg p-5">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Para exercer os seus direitos, esclarecer dúvidas ou apresentar reclamações sobre privacidade:
                  </p>

                  <div className="space-y-3">
                    <p className="text-gray-300">
                      <strong className="text-yellow-500">Email de Privacidade:</strong>{" "}
                      <a
                        href="mailto:privacidade@melhoressitesdecasinos.com"
                        className="text-green-500 hover:text-green-400 transition-colors"
                      >
                        privacidade@melhoressitesdecasinos.com
                      </a>
                    </p>

                    <p className="text-gray-300">
                      <strong className="text-yellow-500">Prazo de Resposta:</strong> Dentro de 30 dias úteis
                    </p>

                    <p className="text-gray-300">
                      <strong className="text-yellow-500">Autoridade de Controlo:</strong> CNPD (Comissão Nacional de
                      Proteção de Dados)
                      <br />
                      <span className="text-gray-400 text-sm">
                        Website:{" "}
                        <a
                          href="https://www.cnpd.pt"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:text-green-400 transition-colors"
                        >
                          www.cnpd.pt
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4">
                  Tem o direito de apresentar uma reclamação à CNPD se considerar que o tratamento dos seus dados
                  pessoais viola o RGPD.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-green-600 mb-4">11. Alterações à Política</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Esta política de privacidade pode ser atualizada periodicamente para refletir mudanças na legislação,
                  nos nossos serviços ou nas nossas práticas de tratamento de dados. Alterações significativas serão
                  comunicadas através de:
                </p>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5">
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Notificação por email aos utilizadores registados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Banner de aviso no website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Atualização da data de "Última atualização" abaixo</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Recomendamos que consulte esta página regularmente para se manter informado sobre como protegemos os
                  seus dados.
                </p>

                <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4 mt-4">
                  <p className="text-gray-300">
                    <strong className="text-green-500">Última atualização:</strong> Janeiro 2025
                  </p>
                  <p className="text-gray-400 text-sm mt-2">Versão 2.0 - Atualizada para conformidade total com RGPD</p>
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

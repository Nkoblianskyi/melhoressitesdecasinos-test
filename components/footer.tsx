import { Crown, Award, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black/70 border-t border-green-600/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex items-center gap-3 bg-slate-900/50 border border-green-600/20 rounded-lg p-4">
            <div>
              <div className="text-white font-semibold text-sm">100% Seguro</div>
              <div className="text-slate-400 text-xs">Licenciados SRIJ</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/50 border border-green-600/20 rounded-lg p-4">

            <div>
              <div className="text-white font-semibold text-sm">Verificado</div>
              <div className="text-slate-400 text-xs">Testados & Aprovados</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/50 border border-green-600/20 rounded-lg p-4">

            <div>
              <div className="text-white font-semibold text-sm">Top Bónus</div>
              <div className="text-slate-400 text-xs">Ofertas Exclusivas</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/50 border border-green-600/20 rounded-lg p-4">

            <div>
              <div className="text-white font-semibold text-sm">Atualizado</div>
              <div className="text-slate-400 text-xs">Janeiro 2025</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold font-playfair">
                <span className="text-red-600">Melhores</span>
                <span className="text-white">Sites</span>
                <span className="text-green-600">DeCasinos</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md mb-4">
              O seu guia confiável para os melhores casinos online em Portugal. Análises independentes, bónus exclusivos
              e jogo responsável.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg border-b border-green-600/30 pb-2">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-green-500 text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-green-600">›</span> Página Principal
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-slate-300 hover:text-green-500 text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-green-600">›</span> Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 hover:text-green-500 text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-green-600">›</span> Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600/30 pt-8">
          {/* Organizations */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/design-mode/srij.svg"
                alt="SRIJ"
                className="h-10 w-auto object-contain opacity hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-lg hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/design-mode/gamecare.svg"
                alt="GamCare"
                className="h-10 w-auto object-contain  hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/design-mode/icad.png"
                alt="ICAD"
                className="h-10 w-auto object-contain hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/design-mode/jogo2.png"
                alt="Jogo Responsável"
                className="h-10 w-auto object-contain hover:opacity-100 transition-opacity"
              />
            </Link>

            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-base shadow-lg">18+</div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-green-600/20 pt-6">
            <p className="text-slate-400 text-sm mb-2">
              © 2025 melhoressitesdecasinos.com. Todos os direitos reservados.
            </p>
            <p className="text-slate-500 text-xs">
              Jogo Responsável | O jogo pode causar dependência | Linha de Apoio: 1414
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

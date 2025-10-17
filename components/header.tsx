import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold font-playfair">
              <span className="text-red-600">Melhores</span>
              <span className="text-white">Sites</span>
              <span className="text-green-600">DeCasinos</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

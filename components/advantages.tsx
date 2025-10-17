import Image from "next/image"
import { Gift, CreditCard, Headphones, Shield } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      icon: Gift,
      title: "Bônus Exclusivos",
      color: "text-amber-400",
      bg: "bg-amber-950/40",
    },
    {
      icon: CreditCard,
      title: "Pagamentos rápidos",
      color: "text-green-400",
      bg: "bg-green-950/40",
    },
    {
      icon: Headphones,
      title: "24/7 Apoiar",
      color: "text-red-400",
      bg: "bg-red-950/40",
    },
    {
      icon: Shield,
      title: "Licenciado e seguro",
      color: "text-emerald-400",
      bg: "bg-emerald-950/40",
    },
  ]

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-2xl">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`text-center ${advantage.bg} backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10 shadow-lg`}
            >
              <div className="inline-flex items-center justify-center w-6 sm:w-10 h-6 sm:h-10 mb-1 sm:mb-2">
                {advantage.title === "Licenciado e seguro" ? (
                  <Image src="/flag.png" alt="Flag" width={32} height={32} className="object-contain rounded" />
                ) : (
                  <advantage.icon className={`h-5 sm:h-8 w-5 sm:w-8 ${advantage.color}`} />
                )}
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-white leading-tight">{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

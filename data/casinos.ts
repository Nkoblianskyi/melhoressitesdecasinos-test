export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
  reviews: number
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.8,
    bonus: "100% Até 20€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    isTopChoice: true,
    url: "https://www.betclic.pt/",
    reviews: 3439,
  },
  {
    rank: 2,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.7,
    bonus: "300% até 30€ em Aposta Grátis",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    url: "https://www.solverde.pt/",
    reviews: 4257,
  },
  {
    rank: 3,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.5,
    bonus: "Aposta Grátis de 2€ Atualmente",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    url: "https://www.casinoportugal.pt/",
    reviews: 3587,
  },
  {
    rank: 4,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.3,
    bonus: "Aposta Grátis de Atualmente",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    url: "https://www.luckia.pt/",
    reviews: 3695,
  },

  {
    rank: 5,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.1,
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    url: "https://www.lebull.pt/",
    reviews: 4215,
  },
]

export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.isTopChoice) || casinos[0]
}

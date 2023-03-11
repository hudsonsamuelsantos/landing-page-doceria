import brigadeiro from '../../../public/brigadeiro.jpeg'
import brownie from '../../../public/brownie.jpeg'
import palha from '../../../public/palha.jpeg'

const products = [
  {
    name: "Brigadeiros",
    flavors: [
      "Tradicional",
      "Churros",
      "Coco",
      "Amendoin",
      "Ninho",
      "Mesclado",
    ],
    prices: [
      "25 unidades - R$ 38,00",
      "50 unidades - R$ 68,00",
      "100 unidades - R$ 118,00",
      "Mais de 100 unidades - A combinar"
    ],
    image: brigadeiro
  },

  {
    name: "Palhas Italianas",
    flavors: [
      "Tradicional",
      "Amendoin",
      "Ninho",
    ],
    prices: [
      "6 unidades - R$ 24,00",
      "8 unidades - R$ 28,00",
      "Mais de 100 unidades - A combinar"
    ],
    image: palha
  },

  {
    name: "Brownies",
    flavors: [
      "Tradicional",
      "Rechado com Ninho",
    ],
    prices: [
      "6 unidades - R$ 38,00",
      "8 unidades - R$ 68,00",
      "Mais de 100 unidades - A combinar"
    ],
    image: brownie
  },
]

export default function handler(req, res) {
  res.status(200).json({ products })
}

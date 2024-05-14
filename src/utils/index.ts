import { Goods } from "@/types/Goods"

export const inCart = (goods: Goods[], id: string) => (
  goods.some(item => item.id === id)
)

export const priceFormation = (value: number) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: "USD",
    currencyDisplay: 'symbol'
  }).format(value)
}
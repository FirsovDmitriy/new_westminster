export type QuantityProps = {
  quantity: number
  onCount: (parametr: func) => void
}

type func = (parametr: number) => number
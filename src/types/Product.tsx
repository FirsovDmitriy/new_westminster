export interface Product {
  unit?: any
  slug: string
  price: number
  title: string
  rating: number
  discount: number
  id: string
  size?: string[]
  thumbnail: string
  brand?: string
  colors?: string[]
  images?: string[]
  // reviews?: Review[]
  published?: boolean
  categories: any[]
  status?: string  
}
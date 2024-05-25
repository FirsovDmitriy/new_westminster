import { GoodsCart } from "./slices/cart.slice"

export const cartCreate = async (data: GoodsCart[]) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_MOKKY_BASE_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })

    if(!response.ok) throw new Error('Error...')

    return response.json()
    
  } catch (error) {
    console.log(error?.message)
  }
}

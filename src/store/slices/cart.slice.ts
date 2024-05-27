import { Goods } from '@/types/Goods'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

export interface GoodsCart extends Goods {
  quantity: number
}

interface Cart {
  goods: GoodsCart[],
  totalAmount: number
}

const cartData = localStorage.getItem('cartData')

const initialState: Cart = {
  goods: cartData ? JSON.parse(cartData) : [],
  totalAmount: 0
}

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    putGoods: (state, action: PayloadAction<Goods>) => {
      state.goods.push({
        ...action.payload,
        quantity: 1,
      })
    },

    removeGoods: (state, { payload }: PayloadAction<string>) => {
      const index = state.goods.findIndex(item => item.id === payload)
      if (index !== -1) state.goods.splice(index, 1)
    },

    increment: (state, { payload }: PayloadAction<string>) => {
      const goods = state.goods.find(item => item.id === payload)
      if (goods) goods.quantity++
    },

    decrement: (state, { payload }: PayloadAction<string>) => {
      const goods = state.goods.find(item => item.id === payload)
      if (goods) goods.quantity--
    },

    control: (
      state,
      { payload }: PayloadAction<{ id: string; value: number }>
    ) => {
      const item = state.goods.find(item => item.id === payload.id)
      if (item) {
        item.quantity = payload.value
      }
    },

    calculateTotalSum: (state) => {
      state.totalAmount = state.goods.reduce((currentSum, { price, quantity }) => {
        return currentSum + (price * quantity)
      }, 0)
    }
  },
})

export const { putGoods, removeGoods, increment, decrement, control, calculateTotalSum } =
  slice.actions

export const getCart = (state: RootState) => state.cart.goods
export const getTotalSum = (state: RootState) => state.cart.totalAmount

export default slice.reducer

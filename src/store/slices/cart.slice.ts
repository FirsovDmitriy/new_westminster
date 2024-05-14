import { Goods } from "@/types/Goods"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "@/store"

export interface GoodsCart extends Goods {
  quantity: number
}

const initialState: GoodsCart[] = []

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    putGoods: (state, action: PayloadAction<Goods>) => {
      state.push({
        ...action.payload,
        quantity: 1
      })
    },

    removeGoods: (state, { payload }: PayloadAction<string>) => {
      const index = state.findIndex(item => (
        item.id === payload
      ))
      if(index !== -1) state.splice(index, 1)
    },

    increment: (state, { payload }: PayloadAction<string>) => {
      const goods = state.find(item => (
        item.id === payload
      ))
      if(goods) goods.quantity++
    },

    decrement: (state, { payload }: PayloadAction<string>) => {
      const goods = state.find(item => (
        item.id === payload
      ))
      if(goods) goods.quantity--
    }
  },
  selectors: {
    getCart: state => state
  }
})

export const { putGoods, removeGoods, increment, decrement } = slice.actions

export const getCart = (state: RootState) => state.cart

export default slice.reducer
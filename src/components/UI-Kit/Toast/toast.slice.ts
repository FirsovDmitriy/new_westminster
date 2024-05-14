import { ToastOptions } from "./type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
// import { v4 as uuidv4 } from 'uuid';

type Toasts = {
  toasts: ToastOptions[]
}

const initialState: Toasts = {
  toasts: []
}

const slice = createSlice({
  name: 'toast',
  initialState,

  reducers: {
    add: (state, { payload }) => {
      state.toasts.push({
        // id: uuidv4(),
        ...payload,
        requestClose: false
      })
    },

    remove: (state, { payload }: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(t => (
        t.id !== payload
      ))
    }
  }
})

export const { add, remove } = slice.actions
export const selectToasts = (state: RootState) => state.toast.toasts

export default slice.reducer
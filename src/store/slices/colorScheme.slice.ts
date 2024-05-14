import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "@/store"

export type Mode = {
  mode: 'default' | 'dark' | 'light'
}

const colorMode = localStorage.getItem('color-mode')

const initialState: Mode = {
  mode: colorMode ? JSON.parse(colorMode) : 'default'
}

const colorSchemSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchMode: (state, { payload }) => {
      state.mode = payload
    }
  }
})

export const { switchMode } = colorSchemSlice.actions

export const selectmMode = (state: RootState) => state.theme.mode

export default colorSchemSlice.reducer
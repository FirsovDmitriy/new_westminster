import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slice/auth.slice"
import { bazaarApi } from "./api"

export const store = configureStore({
  reducer: {
    auth: authReducer,

    [bazaarApi.reducerPath]: bazaarApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bazaarApi.middleware),

  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit"
import auth from "./slices/auth.slice"
import { api } from "./api"
import themeReducer from "@/store/slices/colorScheme.slice"
import cart from '@/store/slices/cart.slice'
import toast from '@/components/UI-Kit/Toast/toast.slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
    auth,
    cart,
    toast
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

  devTools: true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
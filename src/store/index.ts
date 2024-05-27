import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit"
import auth from "./slices/auth.slice"
import { api } from "./api"
import theme from "@/store/slices/colorScheme.slice"
import cart, { calculateTotalSum } from '@/store/slices/cart.slice'
import toast from '@/components/UI-Kit/Toast/toast.slice'
import { cartCreate } from "./fetch"

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening.withTypes<RootState, AppDispatch>()({
  predicate: (_, currentState, prevState) => {
    return !Object.is(currentState.cart, prevState.cart)
  },

  effect: async (_, listenerApi) => {
    listenerApi.cancelActiveListeners()
    await listenerApi.delay(900)

    const state = listenerApi.getState()
    listenerApi.dispatch(calculateTotalSum())

    const cartObj = {
      user_id: state.auth.data.id,
      lines: state.cart.goods,
      cost: {
        totalAmount: {
          amount: state.cart.totalAmount
        },
      }
    }

    const response = await cartCreate(cartObj)
    console.log('resp', response)
  }
})

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme,
    auth,
    cart,
    toast
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware),

  devTools: true
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('cartData', JSON.stringify(state.cart.goods))
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
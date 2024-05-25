import { api } from '..'

const cartApi = api.injectEndpoints({
  endpoints: builder => ({
    cartCreate: builder.mutation({
      query: data => ({
        url: '/cart',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useCartCreateMutation } = cartApi

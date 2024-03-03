import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { reducerPaths } from "../reducerPaths"
import type { RootState } from '..'
import { loggedOut } from '../slice/auth.slice'


const BASE_URL = import.meta.env.VITE_MOKKY_BASE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState as unknown as RootState).auth?.token

    if(token) headers.set('authorization', `Bearer ${token}`)

    // headers.set('Content-Type', 'application/json')

    return headers
  }
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const responce = await baseQuery(args, api, extraOptions)

  if(responce.error && responce.error.status === 401) {
    console.log('401 (Unauthorized)')
    api.dispatch(loggedOut())
  }

  return responce
}

export const bazaarApi = createApi({
  reducerPath: 'bazaarApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    register: builder.mutation({
      query: data => {
        return {
          url:  reducerPaths.register,
          method: 'POST',
          body: data
        }
      }
    }),

    login: builder.mutation({
      query: body => ({
        url: '/auth',
        method: 'POST',
        body
      })
    }),

    updateUser: builder.mutation({
      query: ({id, ...data}) => ({
        url: `/users/${ id }`,
        method: 'PATCH',
        body: data
      })
    }),

    uploadFile: builder.mutation({
      query: (file) => ({
        url: '/uploads',
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data;',
        // },
        body: file
      })
    }),

    getPicture: builder.query({
      query: (id: number) => `/uploads/${ id }`
    }),

    auth: builder.query<unknown, void>({
      query: () => '/auth_me'
    }),

    getGoods: builder.query<unknown, void>({
      query: () => '/goods'
    })
  })

})

export const {
  useRegisterMutation,
  useLoginMutation,
  useAuthQuery,
  useGetGoodsQuery,

  useUpdateUserMutation,

  useUploadFileMutation,

  useGetPictureQuery

} = bazaarApi
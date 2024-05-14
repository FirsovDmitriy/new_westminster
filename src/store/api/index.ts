import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '..'

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
      console.log('401 Unauthorized')
    }
  
    return responce
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})

})

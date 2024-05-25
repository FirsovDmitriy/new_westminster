import supabase from '@/supabaseClient'
import { api } from '..'

const STORAGE_URL =
  'https://pbdiaentiohjckbhjqml.supabase.co/storage/v1/object/public/avatars/'

const userApi = api.injectEndpoints({
  endpoints: builder => ({
    registration: builder.mutation({
      query: arg => ({
        url: '/register',
        method: 'POST',
        body: arg,
      }),
    }),

    login: builder.mutation({
      query: body => ({
        url: '/auth',
        method: 'POST',
        body,
      }),
    }),

    profileUpdate: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),

    uploadFile: builder.mutation<unknown, { name: string; file: File }>({
      queryFn: async arg => {
        try {
          const { data, error } = await supabase.storage
            .from('avatars')
            .upload(arg.name, arg.file, {
              cacheControl: 'no-cache',
              upsert: true,
            })

          if (error) {
            {
              error
            }
          }

          const url = `${STORAGE_URL}${data?.path}`

          return { data: url }
        } catch (error) {
          return { error }
        }
      },
    }),

    deleteFile: builder.mutation<unknown, string>({
      queryFn: async arg => {
        try {
          const { data, error } = await supabase.storage
            .from('avatars')
            .remove([arg])

          if (error) return { error }
          return { data }
        } catch (error) {
          return { error }
        }
      },
    }),
  }),
})

export const {
  useRegistrationMutation,
  useLoginMutation,
  useProfileUpdateMutation,
  useUploadFileMutation,
  useDeleteFileMutation,
} = userApi

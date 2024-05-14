import { Goods } from '@/types/Goods'
import { api } from '..'

type PriceSort = 'price_asc' | 'price_desc'

interface Resp {
  items: Goods[]
  meta: {
    total_items: number
    total_pages: number
    current_page: number
    per_page: number
    remaining_count: number
  }
}

const goodsApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllGoods: builder.query<
      Resp,
      { page: number; limit?: number; priceSort?: PriceSort }
    >({
      query: ({ page = 1, limit = 8, priceSort = '' }) =>
        `/goods?page=${page}&limit=${limit}&sortBy=${
          priceSort === 'price_asc' ? 'price' : '-price'
        }`,
    }),

    getGoodsById: builder.query<Goods, number>({
      query: (id: number) => `/goods/${id}`,
    }),

    searchGoodsByName: builder.query<Goods[], string | null>({
      query: (searchQuery: string) =>
        `/goods/?name=*${searchQuery ? searchQuery : null}`,
    }),
  }),
})

export const {
  useGetAllGoodsQuery,
  useGetGoodsByIdQuery,
  useSearchGoodsByNameQuery,
} = goodsApi

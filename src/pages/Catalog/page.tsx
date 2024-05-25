import React from 'react'
import Showcase from '@/components/Showcase'
import { useGetAllGoodsQuery } from '@/store/api/endpoints/goods.endpoint'
import Preloader from '@/components/UI-Kit/Preloader'
import IconButton from '@/components/UI-Kit/IconButton'
import { MoveLeft, MoveRight } from 'lucide-react'
import styled from './styled.module.scss'
import Container from '@/components/UI-Kit/Container'
import { useSearchParams } from 'react-router-dom'
import SelectMenus from '@/components/UI-Kit/SelectMenus'
import { SelectMenusEvent } from '@/components/UI-Kit/SelectMenus/type'

type PriceSort = 'price_asc' | 'price_desc'

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPageValue = searchParams.get('page') ?? 1
  const sorting = searchParams.get('sorting') ?? 'price_asc'
  const [page, setPage] = React.useState(Number(currentPageValue))
  const [priceSort, setPriceSort] = React.useState<PriceSort>(
    sorting as PriceSort
  )

  const { data, isLoading } = useGetAllGoodsQuery({ page, priceSort })

  React.useEffect(() => {
    const currentPage = String(page)
    setSearchParams({
      page: currentPage,
      sorting: priceSort,
    })
  }, [page, priceSort, setSearchParams])

  const handleChange = (event: SelectMenusEvent) => {
    setPriceSort(event.target.value as PriceSort)
  }

  return (
    <React.Fragment>
      <section className={styled.Catalog}>
        <Container className={styled.Catalog__Container}>
          <h2>Catalog</h2>
          <div className={styled.Catalog__Row}>
            <div className={styled.PriceSort}>
              <p className={styled.PriceSort__Label}>Sort by:</p>
              <SelectMenus
                placeholder="Select..."
                value={priceSort}
                onChange={handleChange}
                options={[
                  {
                    value: 'price_asc',
                    label: 'Price, low to high',
                  },
                  {
                    value: 'price_desc',
                    label: 'Price, high to low',
                  },
                ]}
              />
            </div>
          </div>

          <div className={styled.Catalog__Showcase}>
            <Showcase goods={data?.items} />
          </div>

          <div className={styled.Pagination}>
            <div className={styled.Pagination__Arrows}>
              <IconButton
                onClick={() => setPage(prev => prev - 1)}
                disabled={page === 1}>
                <MoveLeft />
              </IconButton>
              <IconButton
                onClick={() => setPage(prev => prev + 1)}
                disabled={page === data?.meta.total_pages}>
                <MoveRight />
              </IconButton>
            </div>
            <span className={styled.Pagination__Meta}>
              <p>Page</p>
              <span>
                {data?.meta.current_page} of {data?.meta.total_pages}
              </span>
              <span>All {data?.meta.total_items}</span>
            </span>
          </div>

        </Container>
      </section>

      {isLoading && <Preloader />}
    </React.Fragment>
  )
}

export default CatalogPage

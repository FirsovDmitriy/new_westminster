import React from 'react'
import Showcase from '../../components/Showcase'
import { useGetAllGoodsQuery } from '@/store/api/endpoints/goods.endpoint'
import Preloader from '@/components/UI-Kit/Preloader'

const HomePage = () => {
  const { data, isLoading } = useGetAllGoodsQuery({ page: 1, limit: 4 })
  
  return (
    <React.Fragment> 
      <section>
        <Showcase goods={data?.items} />
      </section>
      {isLoading && <Preloader />}
    </React.Fragment>
  )
}

export default HomePage
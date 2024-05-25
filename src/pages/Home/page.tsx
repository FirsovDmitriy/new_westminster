import React from 'react'
import Showcase from '../../components/Showcase'
import { useGetAllGoodsQuery } from '@/store/api/endpoints/goods.endpoint'
import Preloader from '@/components/UI-Kit/Preloader'
import Container from '@/components/UI-Kit/Container'

const HomePage = () => {
  const { data, isLoading } = useGetAllGoodsQuery({ page: 1, limit: 4 })
  
  return (
    <React.Fragment> 
      <section>
        <Container>
          <Showcase goods={data?.items} />
        </Container>
      </section>
      {isLoading && <Preloader />}
    </React.Fragment>
  )
}

export default HomePage
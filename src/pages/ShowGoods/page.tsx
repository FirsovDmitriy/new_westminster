import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '@/components/UI-Kit/Container'
import Gallery from './Gallery'
import styled from './page.module.scss'
import GoodsContent from './GoodsContent'
import { useGetGoodsByIdQuery } from '@/store/api/endpoints/goods.endpoint'
import Preloader from '@/components/UI-Kit/Preloader'

const ShowGoods = () => {
  const { id } = useParams()
  console.log('id', id)
  
  const { data, isLoading } = useGetGoodsByIdQuery(Number(id))
  console.log(data)

  return (
    <React.Fragment>
      {isLoading && <Preloader />}
      <section>
        <Container className={styled.wrapper}>
          
          <Gallery images={data?.images} />
          <div className={styled.col}>
            <GoodsContent item={data} />
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default ShowGoods
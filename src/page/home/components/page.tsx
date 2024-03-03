import React from 'react'
import { useGetGoodsQuery } from '../../../store/api'
import Showcase from '../../../components/Showcase'

const HomePage: React.FC = () => {
  const { data } = useGetGoodsQuery()
  console.log('Goods', data)
  
  return (
    <>
      <Showcase />
    </>
  )
}

export default HomePage
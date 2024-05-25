import React from 'react'
import styled from './styled.module.scss'
import Data from './Data'
import Delivery from './Delivery'
import Payment from './Payment'

const CheckoutForm = () => {
  
  return (
    <form className={styled.Form}>
      <Data />
      <Delivery />
      <Payment />
    </form>
  )
}

export default CheckoutForm

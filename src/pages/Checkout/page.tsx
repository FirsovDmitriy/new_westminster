import Container from '@/components/UI-Kit/Container'
import React from 'react'
import CheckoutForm from './CheckoutForm'
import styled from './page.module.scss'

const CheckoutPageRoot = () => {
  return (
    <div className={styled.Checkout}>
      <Container className={styled.Checkout__Wrapper}>
        <div className={styled.Checkout__Col}>
         <CheckoutForm />
        </div>
        <div className={styled.Checkout__Col2}>
          <h2>Order summary</h2>
        </div>
      </Container>
    </div>
  )
}

export default CheckoutPageRoot

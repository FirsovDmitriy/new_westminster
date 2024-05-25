import React from 'react'
import styled from './styled.module.scss'
import PaymentCard from './PaymentCard'

const PaymentMethodSelector = () => {
  return (
    <div className={styled.PaymentMethodSelector}>
      <PaymentCard />
      <PaymentCard />
      <PaymentCard />
    </div>
  )
}

export default PaymentMethodSelector
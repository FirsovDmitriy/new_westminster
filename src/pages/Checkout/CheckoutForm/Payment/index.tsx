import React from 'react'
import styled from '../styled.module.scss'
import PaymentMethodSelector from './PaymentMethodSelector'

const Payment = () => {
  return (
    <React.Fragment>
      <div className={styled.Form__Fields}>
        <h3>03. Payment</h3>
      </div>
      <PaymentMethodSelector />
    </React.Fragment>
  )
}

export default Payment
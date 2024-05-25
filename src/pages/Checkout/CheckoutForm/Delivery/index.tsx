import React from 'react'
import styled from '../styled.module.scss'
import Input from '@/components/UI-Kit/Input'

const Delivery = () => {
  return (
    <div className={styled.Form__Fields}>
      <h3>02. Delivery</h3>
      <div>
        <Input placeholder='Indicate the city of delivery' />
      </div>
    </div>
  )
}

export default Delivery
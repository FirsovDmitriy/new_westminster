import React from 'react'
import Input from '@/components/UI-Kit/Input'
import styled from '../styled.module.scss'

const Data = () => {
  return (
    <div className={styled.Form__Fields}>
      <h3 className={styled.Form__Title}>01. Your data</h3>
      <div>
          <Input
            placeholder="First and Last Name"
            // value={formValues.fullName}
          />
        </div>
        <div>
          <Input
            placeholder="Phone Number"
            // value={formValues.phoneNumber}
          />
        </div>
        <div>
          <Input
            placeholder="Email"
            // value={formValues.email}
          />
        </div>
    </div>
  )
}

export default Data
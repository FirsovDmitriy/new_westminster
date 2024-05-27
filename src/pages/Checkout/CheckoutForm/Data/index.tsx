import React from 'react'
import Input from '@/components/UI-Kit/Input'
import styled from '../styled.module.scss'

const Data = () => {
  const [formValues, setFormValues] = React.useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  })

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className={styled.Form__Fields}>
      <h3 className={styled.Form__Title}>01. Your data</h3>
      <div>
          <Input
            placeholder="First and Last Name"
            value={formValues.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            placeholder="Phone Number"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
    </div>
  )
}

export default Data
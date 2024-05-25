import React from 'react'
import styled from './styled.module.scss'

interface PaymentCardProps {
  checked?: boolean
}

const PaymentCard = ({ checked }: PaymentCardProps) => {
  const ref = React.useRef<HTMLInputElement | null>(null)
  const handleChange = () => {
    ref.current.click()
  }
  return (
    <div className={styled.Card} onClick={handleChange}>
      <label className={styled.RadioButton}>
        <input
          className={styled.RadioButton__Input}
          type='radio'
          name='test'
          checked={checked}
          ref={ref}
        />
        <div className={styled.RadioButton__Content}></div>
      </label>
      <div className={styled.Card__Text}>
        <h4 className={styled.Card__Title}>
          Online
        </h4>
        <p className={styled.Card__Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum natus voluptate quae!
        </p>
      </div>
    </div>
  )
}

export default PaymentCard
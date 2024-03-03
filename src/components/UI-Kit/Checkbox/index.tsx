import React from 'react'
import { CheckboxProps } from './type'

const Checkbox: React.FC<CheckboxProps> = props => {
  const {
    label
  } = props
  
  return (
    <label className='checkbox'>

      <div className='checkbox__wrapper'>
        <input type='checkbox' className='checkbox__input' />
        <div className="checkbox__icon"></div>
      </div>

      <span className='checkbox__text'>
        { label }
      </span>

    </label>
  )
}

export default Checkbox
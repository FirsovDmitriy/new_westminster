import React from 'react'
import { InputProps } from './type'
import cn from 'classnames'

const Input: React.FC<InputProps> = (props) => {
  const {
    value,
    placeholder,
    type,
    onChange,
    className,
    ...restProps
  } = props

  return (
    <input
      className={cn('form-field', className)}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      { ...restProps }
    />
  )
}

export default Input
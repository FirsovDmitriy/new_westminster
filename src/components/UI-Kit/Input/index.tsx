import React from 'react'
import { InputProps } from './type'
import cn from 'classnames'

const Input: React.FC<InputProps> = React.memo((props) => {
  const {
    className,
    ...restProps
  } = props

  return (
    <input
      className={cn('form-field', className)}
      { ...restProps }
    />
  )
})

export default Input
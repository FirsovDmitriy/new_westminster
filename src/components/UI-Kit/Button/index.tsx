import React from 'react'
import { ButtonProps } from './type'
import cn from 'classnames'

const Button: React.FC<ButtonProps> = props => {
  const {
    variant = 'contained',
    children,
    className,
    ...restProps
  } = props

  let styleVariant: string = ''

  switch (variant) {
    case 'contained':
      styleVariant = 'button_contained'
      break;
    case 'outlined':
      styleVariant = 'button_outlined'
      break;
    case 'ghost': 
      styleVariant = 'button_ghost'
      break
    case 'text':
      styleVariant = 'button_text'
  }

  return (
    <button
      className={cn(
        className,
        'base-button button',
        styleVariant
      )}
      { ...restProps }
    >
      { children }
    </button>
  )
}

export default Button
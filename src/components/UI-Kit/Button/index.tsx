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

  let styles: string = ''

  switch (variant) {
    case 'contained':
      styles = 'button_contained'
      break;
    case 'outlined':
      styles = 'button_outlined'
      break;
  }

  return (
    <button
      className={cn(
        className,
        'base-button button',
        styles
      )}
      { ...restProps }
    >
      { children }
    </button>
  )
}

export default Button
import React from 'react'
import { IconButtonProps } from './type'
import cn from 'classnames'

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    children,
    className,
    ...restProps
  } = props

  return (
    <button
      className={cn(className, 'base-button icon-button')}
      { ...restProps }
    >
      { children }
    </button>
  )
}

export default IconButton
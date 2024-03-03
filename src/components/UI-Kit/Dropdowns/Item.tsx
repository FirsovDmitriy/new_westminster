import React from 'react'
import { ItemProps } from './type'
import cn from 'classnames'
import styled from './styled.module.scss'

const Item: React.FC<ItemProps> = props => {
  const {
    children,
    className,
    ...resetProps
  } = props

  return (
    <li
      className={cn(className, styled.item)}
      { ...resetProps }
    >
      { children }
    </li>
  )
}

export default Item
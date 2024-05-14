import React from 'react'
import { ItemProps } from './type'
import cn from 'classnames'
import styled from './styled.module.scss'

const Item = ({ children, className, ...restProps }: ItemProps) => {

  return (
    <li
      className={cn(className, styled.item)}
      { ...restProps }
    >
      { children }
    </li>
  )
}

export default Item
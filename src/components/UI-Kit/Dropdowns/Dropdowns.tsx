import React from 'react'
import styled from './styled.module.scss'
import { DropdownProps } from './type'
import useClickAwayListener from '../../../hooks/useClickAwayListener'
import cn from 'classnames'

const Dropdowns: React.FC<DropdownProps> = props => {
  const {
    children,
    onClose,
    className
  } = props

  const ref = React.useRef(null)
  useClickAwayListener(ref, onClose)
  // console.log(ref, ref)

  return (
    <div
      className={cn(className, styled.dropdowns)}
      ref={ref}
    >
      { children }
    </div>
  )
}

export default Dropdowns
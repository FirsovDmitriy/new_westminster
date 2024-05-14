import React from 'react'
import styled from './styled.module.scss'
import { DropdownProps } from './type'
import useClickAwayListener from '@/hooks/useClickAwayListener'
import cn from 'classnames'

const Dropdowns = ({ children, className, onClose }: DropdownProps) => {
  const ref = React.useRef(null)
  useClickAwayListener(ref, onClose)

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
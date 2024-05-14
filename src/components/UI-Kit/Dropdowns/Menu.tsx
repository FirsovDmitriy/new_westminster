import React from 'react'
import { MenuProps } from './type'
import styled from './styled.module.scss'
import AppCSSTransition from '../../AppCSSTransition'

const Menu = ({ children, show }: MenuProps) => {
  const ref = React.useRef(null)
  
  const classNames = {
    enter: styled.enter,
    enterActive: styled.enterActive,
    exit: styled.exit,
    exitActive: styled.exitActive,
  }

  return (
    <AppCSSTransition
      className={classNames}
      show={show}
      nodeRef={ref}
    >
      <ul ref={ref} className={styled.wrapper}>
        { children }
      </ul>
    </AppCSSTransition>
  )
}

export default Menu
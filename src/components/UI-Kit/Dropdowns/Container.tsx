import React from 'react'
import { WrapperProps } from './type'
import styled from './styled.module.scss'
import AppCSSTransition from '../../AppCSSTransition'

const Container: React.FC<WrapperProps> = props => {
  const {
    children,
    show
  } = props

  const ref = React.useRef(null)
  

  const classNames = {
    enter: styled.enter,
    enterActive: styled.enterActive,
    exit: styled.exit,
    exitActive: styled.exitActive,
  }

  return (
    <AppCSSTransition
      show={show}
      className={classNames}
      nodeRef={ref}
    >
      <ul ref={ref} className={styled.wrapper}>
        { children }
      </ul>
    </AppCSSTransition>
  )
}

export default Container
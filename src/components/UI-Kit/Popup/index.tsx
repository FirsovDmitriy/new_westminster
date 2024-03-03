import React from 'react'
import Backdrop from '../Backdrop'
import styled from './Popup.module.scss'
import Portal from '../../Portal'
import AppCSSTransition from '../../AppCSSTransition'
import { PopupProps } from './type'
import cn from 'classnames'

const Popup: React.FC<PopupProps> = props => {
  const {
    children,
    onClose,
    show,
    className
  } = props

  const ref = React.useRef(null)

  const classNames = {
    enter: styled.enter,
    enterActive: styled.enterActive,
    exit: styled.exit,
    exitActive: styled.exitActive,
  }

  return (
    <>
      <Backdrop onClose={onClose} visible={show} />
      <Portal>
        <AppCSSTransition
          className={classNames}
          show={show}
          nodeRef={ref}
        >
          <div
            onClick={(event: React.MouseEvent) => event.stopPropagation()}
            className={cn(className, styled.popup)}
          >
            { children }
          </div>
        </AppCSSTransition>
      </Portal>
    </>
  )
}

export default Popup
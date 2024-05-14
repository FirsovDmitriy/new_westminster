import React from 'react'
import Backdrop from '../Backdrop'
import styled from './styled.module.scss'
import Portal from '../../Portal'
import AppCSSTransition from '../../AppCSSTransition'
import { PopupProps } from './type'
import cn from 'classnames'

const Popup: React.FC<PopupProps> = props => {
  const {
    children,
    className,
    onClose,
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
    <>
      <Portal>
        <Backdrop onClose={onClose} visible={show} />
        <AppCSSTransition
          className={classNames}
          show={show}
          nodeRef={ref}
        >
          <div
            className={cn(className, styled.popup)}
            ref={ref}
            onClick={(event: React.SyntheticEvent) => event.stopPropagation()}
          >
            { children }
          </div>
        </AppCSSTransition>
      </Portal>
    </>
  )
}

export default Popup
import React from 'react'
import AppCSSTransition from '@/components/AppCSSTransition'
import styled from './styled.module.scss'

interface BackdropProps {
  visible: boolean
  onClose: () => void
}

const Backdrop = ({ visible, onClose }: BackdropProps) => {

  const ref = React.useRef(null)

  const classNames = {
    enter: styled.enter,
    enterActive: styled.enterActive,
    exit: styled.exit,
    exitActive: styled.exitActive,
  }

  return (
    <AppCSSTransition
      show={visible}
      className={classNames}
      nodeRef={ref}
    >
      <div
        role='button'
        className='backdrop'
        onClick={onClose}
        ref={ref}
      />
    </AppCSSTransition>
  )
}

export default Backdrop
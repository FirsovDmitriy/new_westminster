import { FC, ReactNode, RefObject } from 'react'
import { CSSTransition } from 'react-transition-group'

type AppCSSTransitionType = {
  children: ReactNode
  show: boolean
  className: string | object
  nodeRef: RefObject<HTMLDivElement>
}

const AppCSSTransition: FC<AppCSSTransitionType> = (props) => {
  const {
    children,
    className,
    show,
    nodeRef
  } = props

  return (
    <CSSTransition
      unmountOnExit
      timeout={300}
      classNames={className}
      in={show}
      nodeRef={nodeRef}
    >
      { children }
    </CSSTransition>
  )
}

export default AppCSSTransition
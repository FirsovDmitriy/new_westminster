import { FC, ReactNode } from 'react'
import cn from 'classnames'
import styled from './styled.module.scss'

type TypeProps = {
  children: ReactNode
  className?: string
}

const Container: FC<TypeProps> = (props) => {
  const {
    children,
    className
  } = props

  return (
    <div className={cn(className, styled.container)}>
      { children }
    </div>
  )
}

export default Container
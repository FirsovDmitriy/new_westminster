import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

type AppLinkProps = {
  children: React.ReactNode
  to: string
  className?: string
  activeClass?: string
  onClick?: () => void
}

const AppLink = (props: AppLinkProps) => {
  const { children, className, activeClass, ...restProps } = props

  return (
    <NavLink
      className={({ isActive }) =>
        cn(isActive ? activeClass : null, 'link', className)
      }
      {...restProps}
    >
      { children }
    </NavLink>
  )
}

export default AppLink

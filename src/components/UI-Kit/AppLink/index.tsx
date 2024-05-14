import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

type AppLinkProps = {
  children: React.ReactNode
  href: string
  className?: string
  activeClass?: string
}

const AppLink = (props: AppLinkProps) => {
  const { children, className, href, activeClass, ...restProps } = props

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(isActive ? activeClass : null, 'link', className)
      }
      {...restProps}>
      {children}
    </NavLink>
  )
}

export default AppLink

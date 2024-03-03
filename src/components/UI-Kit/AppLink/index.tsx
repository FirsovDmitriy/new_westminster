import React from "react"
import { NavLink } from "react-router-dom"
import cn from "classnames"

type AppLinkProps = {
  children: React.ReactNode
  href: string
  className?: string
  activeClass?: string
};

const AppLink: React.FC<AppLinkProps> = props => {
  const {
    children,
    className,
    href,
    activeClass
  } = props;

  return (
    <NavLink
      to={href}
      className={({ isActive }) => cn(
        isActive ? activeClass : null,
        'link',
        className
      )}
    >
      {children}
    </NavLink>
  )
}

export default AppLink

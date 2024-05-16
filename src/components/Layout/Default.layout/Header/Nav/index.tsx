import cn from 'classnames'
import styled from './styled.module.scss'
import { User } from 'lucide-react'
import AppLink from '@/components/UI-Kit/AppLink'
import routesPath from '@/router/routesPath'

interface NavProps {
  className?: string
  show: boolean
  onClose: (arg: boolean) => void
}

const Nav = ({ className, show, onClose }: NavProps) => {
  return (
    <nav
      className={cn(styled.nav, className, show ? styled.show : styled.hidden)}>
      <ul className={styled.list}>
        <li className={styled.item}>
          <AppLink
            to={routesPath.CATALOG}
            activeClass={styled.linkActive}
            className={styled.link}>
            Catalog
          </AppLink>
        </li>
      </ul>

      <div className={styled.account}>
        <AppLink
          onClick={() => onClose(false)}
          to={routesPath.PROFILE}
          className={styled.accountLink}>
          <User />
          Log in
        </AppLink>
      </div>
    </nav>
  )
}

export default Nav

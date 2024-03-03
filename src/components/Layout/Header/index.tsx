import { FC, useState } from "react"
import styled from "./Header.module.scss"
import Typography from "../../UI-Kit/Typography"
import Container from "../../UI-Kit/Container"
import Nav from "./Nav"
import SearchForm from "./SearchForm"
import { MdOutlineAccountBalance } from "react-icons/md";
import Cart from "./ShoppingCart"
import cn from "classnames"
import AppLink from "../../UI-Kit/AppLink"
import routesPath from "../../../router/routesPath"

const Header: FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <header className={styled.header}>
      <Container className={styled.content}>
        <div>
          <AppLink href={routesPath.HOME}>
            <Typography tag="h1" className={styled.logoText}>
              cropp
            </Typography>
          </AppLink>
        </div>
        <Nav show={showNav} />
        
        <div className={styled.actions}>
          <SearchForm />
          <AppLink href={routesPath.PROFILE} className={styled.account}>
            <MdOutlineAccountBalance size={'1.5rem'} />
          </AppLink>
          <Cart />
          <button
            onClick={() => setShowNav(prev => !prev)}
            className={styled.navToggle}
          >
            <span className={cn(styled.hamburger, showNav ? styled.close : null)}></span>
          </button>
        </div>

      </Container>
    </header>
  )
}

export default Header

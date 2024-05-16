import React from "react"
import styled from "./Header.module.scss"
import Typography from "../../../UI-Kit/Typography"
import Container from "../../../UI-Kit/Container"
import Nav from "./Nav"
import Search from "./Search"
import { UserRound } from "lucide-react";
import Cart from "./Cart"
import cn from "classnames"
import AppLink from "@/components/UI-Kit/AppLink"
import routesPath from "@/router/routesPath"

const Header = () => {
  const [showNav, setShowNav] = React.useState<boolean>(false)

  return (
    <header className={styled.header}>
      <Container className={styled.content}>
        <div>
          <AppLink to={routesPath.HOME}>
            <Typography tag="h1" className={styled.logoText}>
              New Westminster
            </Typography>
          </AppLink>
        </div>
        <Nav show={showNav} onClose={setShowNav} />
        
        <div className={styled.actions}>
          <Search />
          <AppLink to={routesPath.PROFILE} className={styled.account}>
            <UserRound />
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

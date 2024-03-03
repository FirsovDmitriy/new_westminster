import { FC } from "react";
import cn from "classnames";
import styled from "./Nav.module.scss";
import { GoPerson } from "react-icons/go"
import AppLink from "../../../UI-Kit/AppLink";
import routesPath from "../../../../router/routesPath";

type NavProps = {
  className?: string
  show: boolean
}

const Nav: FC<NavProps> = (props) => {
  const {
    className,
    show
  } = props

  return (
    <nav className={cn(styled.nav, className, show ? styled.show : styled.hidden)}>
      <ul className={styled.list}>
        <li className={styled.item}>
          <AppLink
            href={routesPath.CATALOG}
            activeClass={styled.linkActive}
            className={styled.link}
          >
            Catalog
          </AppLink>
        </li>
        <li className={styled.item}>
          <AppLink
            href={routesPath.DELIVERY}
            activeClass={styled.linkActive}
            className={styled.link}
          >
            Delivery
          </AppLink>
        </li>
        <li className={styled.item}>
          <AppLink
            href={routesPath.CONTACT}
            activeClass={styled.linkActive}
            className={styled.link}
          >
            Contact
          </AppLink>
        </li>
      </ul>

      <div className={styled.account}>
        <a href="#" className={styled.accountLink}>
          <GoPerson />
          Log in
        </a>
      </div>

    </nav>
  );
};

export default Nav;

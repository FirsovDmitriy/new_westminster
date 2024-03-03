import React from "react"
import styled from "./Tabbar.module.scss"
import cn from "classnames"
import Tab from "./Tabs/Tab"
import useAppDispatch from "../../../hooks/useAppDispatch"
import { MdLogout } from "react-icons/md"
import { loggedOut } from "../../../store/slice/auth.slice"

interface TabbarProps {
  switchTab: (parametr: number) => void
  tab: number
}

const Tabbar: React.FC<TabbarProps> = ({ switchTab, tab }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styled.tabbar} role="tablist">
      <div className={styled.tabbarContainer}>
        <Tab index={1} tab={tab} switchTab={() => switchTab(1)}>
          Dashboard
        </Tab>

        <Tab index={2} tab={tab} switchTab={() => switchTab(2)}>
          Orders
        </Tab>

        <Tab switchTab={() => switchTab(3)} index={3} tab={tab}>
          Account details
        </Tab>

        <button
          type="button"
          className={cn(styled.button, "base-button")}
          onClick={() => dispatch(loggedOut())}
        >
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Tabbar

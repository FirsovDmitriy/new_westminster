import React from 'react'
import styled from './styled.module.scss'
import { TabbarProps } from './type'
import Tab from './Tab'

const tabs = [
  {
    key: 1,
    label: 'general',
  },
  {
    key: 2,
    label: 'theme',
  },
  {
    key: 3,
    label: 'addresses',
    disabled: true
  },
]

const Tabbar: React.FC<TabbarProps> = ({ value, onChange }) => {
  const children = tabs.map((tab, index) => {
    const selected = value === index
    
    return (
      <Tab
        selected={selected}
        value={index}
        onChange={onChange}
        disabled={tab.disabled}
        key={tab.key}
      >
        { tab.label }
      </Tab>
    )
  })

  return <div className={styled.tabbar}>
    <div className={styled.tabbarContainer}>
      { children }
    </div>
    {/* <span className={styled.indicator}></span> */}
  </div>
}

export default Tabbar

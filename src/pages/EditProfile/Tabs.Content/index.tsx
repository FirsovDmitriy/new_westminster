import React from 'react'
import { TabItemProps } from './type'

const TabsContent: React.FC<TabItemProps> = ({ children, value, index }) => {
  
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
    >
      {value === index && children}
    </div>
  )
}

export default TabsContent
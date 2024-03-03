import React from 'react'
import { TriggerProps } from './type'

const Trigger: React.FC<TriggerProps> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

export default Trigger
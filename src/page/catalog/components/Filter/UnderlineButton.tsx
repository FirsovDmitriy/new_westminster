import React from 'react'
import styled from './UnderlineButton.module.scss'
import cn from 'classnames'

interface ResetButtonProps {
  onClick?: () => void
  children: string | React.ReactNode
}

const UnderlineButton: React.FC<ResetButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className={cn(styled.resetButton, 'base-button',)}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default UnderlineButton
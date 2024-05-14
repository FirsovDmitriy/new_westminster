import React from 'react'
import Button from '@/components/UI-Kit/Button'
import { TabProps } from './type'

const Tab: React.FC<TabProps> = props => {
  const {
    children,
    selected,
    value,
    onChange,
    disabled,
  } = props

  const ownerProps = {
    disabled
  }

  function handleClick(event: React.SyntheticEvent) {
    if(!selected) {
      onChange(event, value)
    }
  }

  return (
    <Button
      variant='ghost'
      role='tab'
      onClick={handleClick}
      { ...ownerProps }
    >
      { children }
    </Button>
  )
}

export default Tab
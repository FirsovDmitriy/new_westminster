import React from "react"

type DropdownSlot = React.ReactNode

export interface DropdownProps {
  children: DropdownSlot
  onClose: () => void
  className?: string
}

export type TriggerProps = {
  children: DropdownSlot
}

export type MenuProps = {
  children: DropdownSlot
  show: boolean
}

export type ItemProps = {
  children: DropdownSlot
  className?: string
  onClick?: () => void
}

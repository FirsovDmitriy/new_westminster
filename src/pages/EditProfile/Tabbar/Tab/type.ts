import React from "react"

export interface TabProps {
  children: React.ReactNode
  onChange: (event: React.SyntheticEvent, value: number) => void
  value: number
  disabled?: boolean
  selected: boolean
}
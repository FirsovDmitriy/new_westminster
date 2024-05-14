import React from "react"

type items = {
  key: number
  label: string
  disabled?: boolean
}

export interface TabbarProps {
  value: number
  onChange: (event: React.SyntheticEvent, value?: number) => void
  items?: items
}
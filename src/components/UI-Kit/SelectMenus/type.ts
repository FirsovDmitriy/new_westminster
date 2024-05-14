import React from "react"

export interface SelectMenusOption {
  selected?: boolean
  label: string
  value: string
  disabled?: boolean
}

export interface SelectMenusProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  options?: SelectMenusOption[]
  multiple?: boolean
  onChange?: (event: SelectMenusEvent) => void
  value: string | string[]
  id?: string
}

export type SelectMenusEvent<Value = string> = 
  (Event & { target: { value: Value, } })
  | React.ChangeEvent<HTMLInputElement>

export type EventConstructor =
  (Event & { prototype: { constructor: () => void } })
  | React.PointerEvent<HTMLLIElement>

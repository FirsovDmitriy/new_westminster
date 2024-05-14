import React from "react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: boolean
  className?: string
  label?: string
  checked?: boolean
  id?: string
}
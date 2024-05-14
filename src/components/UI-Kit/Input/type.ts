import React from "react"

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  type?: string
  id?: string
  className?: string
  name?: string
  autoComplete?: string
}
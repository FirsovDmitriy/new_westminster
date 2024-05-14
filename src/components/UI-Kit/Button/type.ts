import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: (event: React.SyntheticEvent) => void
  /**
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'ghost' | 'text'
}
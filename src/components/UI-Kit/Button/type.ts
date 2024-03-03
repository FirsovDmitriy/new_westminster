import React from "react"

export type ButtonProps = {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: (event: React.SyntheticEvent) => void
  /**
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined'
}
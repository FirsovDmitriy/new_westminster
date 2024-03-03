import { ReactNode } from "react"

export type IconButtonProps = {
  onClick?: () => void
  className?: string
  children: ReactNode
  disabled?: boolean
  type?: string
}
import { ReactNode } from "react"

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  // disabled?: boolean
  // type?: "button" | "reset" | "submit"
}
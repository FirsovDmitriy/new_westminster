import React from "react"

export type RadioProps = {
  onChange: (parametr: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  label: string
  name: string
  checked: boolean
}
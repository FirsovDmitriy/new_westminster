import React from "react";

export interface PopupProps {
  children: React.ReactNode
  show: boolean
  onClose: () => void
  className?: string
}
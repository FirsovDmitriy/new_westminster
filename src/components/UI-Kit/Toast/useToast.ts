import React from "react"
import useAppDispatch from "@/hooks/useAppDispatch"
import { add, remove } from "./toast.slice"
import { PublicToastOptions } from "./type"
import useTimeout from "@/hooks/useTimeout"

export function useToast() {
  const id = React.useId()
  const dispatch = useAppDispatch()

  function show(option: PublicToastOptions) {
    dispatch(add({
      id,
      ...option
    }))
  }

  function onClose() {
    dispatch(remove(id))
  }

  useTimeout(onClose, 9000)

  return {
    show
  }
}
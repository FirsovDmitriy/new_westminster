import React from "react"
import { isFunc } from "./utils"

export default function create(value:string, validators:any) {
  const [$invalid, setInvalid] = React.useState(false)
  const [$valid, setValid] = React.useState(false)
  const $params = validators?.$params || {}

  React.useEffect(() => {
    setInvalid(!validators.$validator(value))

    setValid(validators.$validator(value))
  }, [value])

  const message = validators.$message
  const $message = isFunc(message)
    ? message($params)
    : message

  return {
    $message,
    $invalid,
    $valid
  }
}
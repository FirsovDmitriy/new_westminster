import React from "react"
import { isFunc } from "./utils"

export default function create(rule:any, value:string, validators:any) {
  const [$invalid, setInvalid] = React.useState(false)
  console.log('validators', validators)
  const $params = validators?.$params || {}

  React.useEffect(() => {
    setInvalid(validators.$validator(value))
  }, [value])

  const message = validators.$message
  const $message = isFunc(message)
    ? message($params)
    : message

  return {
    $message,
    $invalid
  }
}
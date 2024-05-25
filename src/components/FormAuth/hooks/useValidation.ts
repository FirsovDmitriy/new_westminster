/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import create from '../create'

export type ErrorObject = {
  $id: number
  $message: string
  $params?: string | number
}

export interface ValidationResult {
  $invalid: boolean
  $dirty: boolean
  $touch: () => void
  $reset: () => void
  $silentErrors: ErrorObject[]
  $errors: ErrorObject[]
}

export default function useValidation(value: string, validators: object) {
  const [$dirty, setDirty] = React.useState(false)
  console.log($dirty)
  const keys = Object.keys(validators)

  const result: ValidationResult = {
    $dirty,
    $touch: () => setDirty(true),
    $reset: () => setDirty(false),
    $invalid: false,
    $silentErrors: [],
    $errors: [],
  }

  keys.forEach(key => {
    result[key] = create(key, value, validators[key])
  })

  result.$silentErrors = keys
    .filter(key => result[key].$invalid)
    .map(key => {
      const resp = result[key]
      let id = 1
      return {
        $id: id++,
        $message: resp.$message,
      }
    })

  result.$errors = result.$dirty ? result.$silentErrors : []

  console.log('Result', result)

  return result
}

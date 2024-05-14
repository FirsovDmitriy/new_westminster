/* eslint-disable no-var */
import { useEffect, useState } from 'react'

interface IError {
  id: string
  $invalid: boolean
  $text: string
}

export default function useValidation(value: string, validations: any) {
  var [errors, setErrors] = useState<IError[]>([])
  var [result, setResult] = useState<IError[]>([])

  var validationKeys = Object.keys(validations)

  useEffect(() => {
    setResult(
      validationKeys.map(key => ({
        id: key,
        $invalid: validations[key].$validator(value),
        $text: typeof(validations[key].$message) === 'function'
          ? validations[key].$message(validations[key])
          : validations[key].$message,


      }))
    )
  }, [value])

  useEffect(() => {
    setErrors(
      result.filter(error => error.$invalid)
    )
  }, [result])

  return {
    errors,
  }
}

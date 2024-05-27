import { req } from "../../utils"

export default (length: number) => (value: string) => {
  return !req(value) || value.length >= length
}
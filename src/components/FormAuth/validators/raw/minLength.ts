export default (length: number) => (value: string) => {
  if(!value.length) return false
  return value.length < length
}
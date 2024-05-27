
export function isFunc(val: any) {
  return typeof(val) === 'function'
}

export function req(value:string) {
  return !!value.length
}
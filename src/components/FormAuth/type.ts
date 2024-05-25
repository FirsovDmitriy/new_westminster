

export interface Validator {
  $validator: () => boolean
  $message: string
  // $param?: {}
}
import minLength from "../raw/minLength";

export default function (min:number) {
  return {
    $validator: minLength(min),
    $message: ($params) => `This field should be at least ${$params.min} characters long`,
    $params: { min }
  }
}
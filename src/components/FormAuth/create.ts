
interface Result {
  $invalid?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function create(rules: any) {
  const rulesKeys = Object.keys(rules)

  const result: Result = {}
}
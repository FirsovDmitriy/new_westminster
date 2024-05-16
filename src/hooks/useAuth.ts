import React from "react"
import { selectCurrentUser } from "@/store/slices/auth.slice"
import useTypedSelector from "./useTypedSelector"
import { User } from "@/types/User"

const useAuth = () => {
  const user: User = useTypedSelector(selectCurrentUser)
  return React.useMemo(() => ({ user }), [user])
}
export default useAuth
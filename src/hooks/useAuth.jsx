import { useContext } from "react"
import { AuthContext } from "../contexts/auth-context"

export const useAuth = () => {
    const {token , setToken , PostStates} = useContext(AuthContext)
    return {token , setToken , PostStates}
}
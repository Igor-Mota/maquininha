import { useContext } from 'react'
import { AuthProvide } from '../context/AuthContext'

export const useAuthContext = () => {
  const { logged, setLogged, user, setUser } = useContext(AuthProvide)

  return {
    logged,
    setLogged,
    user,
    setUser
  }
}

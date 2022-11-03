import { useContext } from 'react'
import { AuthProvide } from '../context/AuthContext'

export const useAuthContext = () => {
  const { logged, setLogged, user } = useContext(AuthProvide)

  return {
    logged,
    setLogged,
    user
  }
}

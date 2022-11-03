import { useState } from 'react'

import { createContext } from 'react'

interface Props {
  children: React.ReactNode
}

interface ContextData {
  logged?: boolean
  setLogged?: any
  user?: {
    username: string
    name: string
  }
}

export const AuthProvide = createContext<ContextData>({})

export const AuthContext: React.FC<Props> = ({ children }) => {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState()
  return <AuthProvide.Provider value={{ logged, setLogged, user }}>{children}</AuthProvide.Provider>
}

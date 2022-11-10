import React, { SetStateAction, useState } from 'react'

import { createContext } from 'react'

interface Props {
  children: React.ReactNode
}

interface ContextData {
  logged?: boolean
  setLogged?: any
  setUser?: React.Dispatch<SetStateAction<any>>
  user?: {
    username: string
    name: string
    level: 'root' | 'admin' | 'manager' | 'client'
  }
}

export const AuthProvide = createContext<ContextData>({})

export const AuthContext: React.FC<Props> = ({ children }) => {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState()
  return <AuthProvide.Provider value={{ logged, setLogged, user, setUser }}>{children}</AuthProvide.Provider>
}

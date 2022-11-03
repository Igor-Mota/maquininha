import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
export const useSession = () => {
  const { push } = useRouter()
  useEffect(() => {
    const { authorization } = parseCookies()
    if (!authorization) push('/')
  }, [])
}

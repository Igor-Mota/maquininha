import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setCookie, destroyCookie } from 'nookies'
import { useRefreshToken, fetcher } from '../../framework/auth/useRefreshToken'
export const useSession = () => {
  const { push } = useRouter()

  useEffect(() => {
    fetcher()
      .then(response => {
        if (!response.data?.data.token) {
          destroyCookie(null, 'authorization')
          setCookie(null, 'authorization', response.data?.data.token)
          push('/')
        }
      })
      .catch(err => {
        fetcher()
          .then(response => {
            if (!response.data?.data.token) {
              destroyCookie(null, 'authorization')
              setCookie(null, 'authorization', response.data?.data.token)
              push('/')
            }
          })
          .catch(err => {
            destroyCookie(null, 'authorization')
            push('/')
          })
      })
  }, [])
}

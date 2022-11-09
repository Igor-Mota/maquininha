import { useRouter } from 'next/router'
import { setCookie, destroyCookie } from 'nookies'
import { fetcher } from '../../framework/auth/useRefreshToken'
export const useSession = () => {
  const { push } = useRouter()

  async function verify() {
    fetcher()
      .then(response => {
        console.log(response)
        if (!response || !response.data?.data.token) {
          destroyCookie(null, 'authorization')
          setCookie(null, 'authorization', response.data?.data.token)
          push('/')
        }
      })
      .catch(err => {
        console.log(err)
        destroyCookie(null, 'authorization')
        push('/')
      })
  }
  verify()
}

import { useEffect } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import { useRouter } from 'next/router'

export default function SingOut() {
  const { push } = useRouter()

  useEffect(() => {
    destroyCookie(null, 'authorization', {
      path: '/'
    })
    push('/')
  }, [])

  return <></>
}

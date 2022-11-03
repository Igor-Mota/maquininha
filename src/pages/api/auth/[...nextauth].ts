//@ts-nocheck
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import { apiLogin } from '../../../framework/auth/useLogin'
export default NextAuth({
  pages: {
    signIn: '/index'
  },

  providers: [
    CredentialProvider({
      name: 'credentials',
      id: 'creds',
      async authorize(credentials, req) {
        //@ts-ignore
        const { username, password } = credentials
        const { data, status } = await apiLogin({ username, password })
        console.log(data)

        return data
      }
    })
  ]
})

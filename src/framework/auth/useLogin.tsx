import { useMutation } from 'react-query'
import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

interface apiParams {
  username: string
  password: string
}

export const apiLogin = async ({ username, password }: apiParams) => {
  try {
    const { data, status, ...rest } = await http.post(API_ENDPOINTS.login, { username, password })

    return { data, status }
  } catch (e: any) {
    //@ts-ignore
    if (e.response && e.response.data) {
      return e.response.data
    } else {
      return 'errro'
    }
  }
}

export const useLogin = () => {
  return useMutation(apiLogin, { mutationKey: [API_ENDPOINTS.login] })
}

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
  } catch (e) {
    //@ts-ignore
    return e.response.data
  }
}

export const useLogin = () => {
  return useMutation(apiLogin, { mutationKey: [API_ENDPOINTS.login] })
}

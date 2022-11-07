import { useMutation } from 'react-query'
import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

export const fetcher = async (payload: any) => {
  const { data, status } = await http.post(API_ENDPOINTS.register_user, payload)
  return {
    data,
    status
  }
}

export const useRegisterUser = () => {
  return useMutation([API_ENDPOINTS.register_user], fetcher)
}

import { useQuery } from 'react-query'
import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

export const fetcher = async () => {
  const { data, status } = await http.get(API_ENDPOINTS.refresh)
  return { data, status }
}

export const useRefreshToken = async () => {
  const { data, status, isLoading } = useQuery([API_ENDPOINTS.refresh], fetcher)
  return { data, status, isLoading }
}

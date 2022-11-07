import { useQuery } from 'react-query'
import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

export const fetcher = async () => {
  const { data } = await http.get(API_ENDPOINTS.getLatest)

  return data
}

export const useGetUsers = () => {
  return useQuery([API_ENDPOINTS.getLatest + '1'], fetcher)
}

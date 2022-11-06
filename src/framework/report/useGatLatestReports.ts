import { useQuery } from 'react-query'
import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

export const fetcher = async () => {
  const {
    data: { data },
    status
  } = await http.get(API_ENDPOINTS.getLatest)
  return {
    data,
    status
  }
}

export const useGetLatestReports = () => {
  return useQuery([API_ENDPOINTS.getLatest], fetcher)
}

import { useQuery } from 'react-query'
import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

export const fetcher = async () => {
  const { data, status } = await http.get(API_ENDPOINTS.report)
  return {
    data,
    status
  }
}

export const useGetLatestReports = () => {
  //@ts-ignore
  return useQuery([API_ENDPOINTS.report, { init: '', end: '', number: '' }], fetcher)
}

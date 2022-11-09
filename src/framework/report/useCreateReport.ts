import { useMutation } from 'react-query'
import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

export const fetcher = async (payload: any) => {
  const { data, status } = await http.post(API_ENDPOINTS.newReport, payload)
  return {
    data,
    status
  }
}

export const useCreateReport = () => {
  return useMutation([API_ENDPOINTS.newReport], fetcher)
}

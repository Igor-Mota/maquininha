import { http } from '../http/http'
import { API_ENDPOINTS } from '../http/utils/endpoints'

interface Params {
  machine: number | string
  value: number | string
}

export const addNewReport = async ({ machine, value }: Params) => {
  try {
    const { data, status } = await http.post(API_ENDPOINTS.newReport, { machine, value })
    return { data, status }
  } catch (e) {
    //@ts-ignore
    return e.response
  }
}

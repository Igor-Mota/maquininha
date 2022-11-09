import axios from 'axios'
import { API_ENDPOINTS } from '../http/utils/endpoints'

export const fetcher = async (authorization?: string | undefined) => {
  try {
    const { data, status } = await axios.get('https://maquininhasas.herokuapp.com' + API_ENDPOINTS.refresh, {
      headers: {
        authorization: authorization || ''
      }
    })

    return { data, status }
  } catch (e) {
    //@ts-ignore
    return { data: e.response, status: 404 }
  }
}

import axios from 'axios'
import { parseCookies } from 'nookies'
import { QueryClient } from 'react-query'

const http = axios.create({
  baseURL: 'https://maquininhasas.herokuapp.com'
})

http.interceptors.request.use(cfg => {
  //@ts-ignore
  cfg.headers['authorization'] = parseCookies().authorization

  return cfg
})
const queryClient = new QueryClient()

export { http, queryClient }

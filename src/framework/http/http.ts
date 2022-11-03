import axios from 'axios'
import { parseCookies } from 'nookies'

const http = axios.create({
  baseURL: 'https://maquininhasas.herokuapp.com'
})

http.interceptors.request.use(cfg => {
  //@ts-ignore
  cfg.headers['authorization'] = parseCookies().authorization

  return cfg
})

export { http }

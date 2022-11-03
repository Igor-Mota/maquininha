import axios from 'axios'

const http = axios.create({
  baseURL: 'https://maquininhasas.herokuapp.com'
})

export { http }

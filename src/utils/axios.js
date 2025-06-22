import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // tu backend
  withCredentials: true, // 🔑 esto permite enviar cookies
})

export default api

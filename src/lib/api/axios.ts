import config from '../../config'
import axios from 'axios'

// Create an axios instance
const instance = axios.create({
  baseURL: config.apiUrl
})

export default instance

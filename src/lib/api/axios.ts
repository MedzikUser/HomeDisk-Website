import axios from 'axios'

import config from '../../config'

// Create an axios instance
const instance = axios.create({
  baseURL: config.apiUrl
})

export default instance

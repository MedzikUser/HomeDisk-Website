import axios from '$lib/api/axios'
import handleError from '$lib/api/utils/handleError'
import { getToken } from '$lib/utils/token'

export default async function (path: string, file: File): Promise<Response> {
  const data = new FormData()

  data.append('file', file)

  const token = getToken()

  const request = axios.post(`/fs/upload?path=${encodeURI(path)}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const response = request
    // wait for a server send response
    .then((response) => {
      const { data } = response

      return data
    })
    // handle error
    .catch(handleError)

  // return server response
  return response
}

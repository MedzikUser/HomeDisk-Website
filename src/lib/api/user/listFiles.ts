import axios from '$lib/api/axios'
import handleError from '$lib/api/utils/handleError'
import { getToken } from '$lib/utils/token'

export default async function (path: string): Promise<Response> {
  const token = getToken()

  const request = axios.post(
    '/fs/list',
    {
      path
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

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

export type Response = {
  files: FileType[]
  dirs: DirType[]
}

export type FileType = {
  name: string
  size: string
  modified: string
}

export type DirType = {
  name: string
  size: string
  modified: string
}

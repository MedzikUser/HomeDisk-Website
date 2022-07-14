// Server response error handler
export default function handleError(err: any) {
  console.error(err)
  // if the json `error` field in response exists
  if (err.response?.data?.error) {
    throw new Error(err.response.data.error)
  }

  // axios error
  throw new Error(err)
}

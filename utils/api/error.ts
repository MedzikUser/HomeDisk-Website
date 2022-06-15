export default function handleError(err: any) {
    if (err.response?.data?.error_message) {
        const error = err.response.data.error_message

        if (error.toString() == "[object Object]") {
            Object.keys(error).forEach(key => {
                throw new Error(key)
            })
        }

        throw new Error(error)
    }

    throw new Error(err)
}

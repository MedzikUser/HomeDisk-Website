// Server response error handler
export default function handleError(err: any) {
    // if `error_message` exists
    if (err.response?.data?.error_message) {
        const error = err.response.data.error_message;

        // if `error_message` is a json object
        if (error.toString() == "[object Object]") {
            Object.keys(error).forEach((key) => {
                throw new Error(key);
            });
        }

        throw new Error(error);
    }

    // axios error
    throw new Error(err);
}

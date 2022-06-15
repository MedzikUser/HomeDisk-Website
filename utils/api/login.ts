import axios from './axios'
import handleError from './error'

export default async function login(username: string, password: string): Promise<string> {
    const request = axios.post("/auth/login", {
        username,
        password,
    })

    const response = request
        .then(response => {
            const { data } = response

            return data.LoggedIn.access_token
        })
        .catch(handleError)

    return response
}

import axios from "./axios";
import handleError from "./error";

// Send HTTP Request to api `/auth/login`
export default async function login(username: string, password: string): Promise<string> {
    const request = axios.post("/auth/register", {
        username,
        password,
    });

    const response = request
        // wait for a server send response
        .then((response) => {
            const { data } = response;

            return data.LoggedIn.access_token;
        })
        // handle error
        .catch(handleError);

    // return server response
    return response;
}

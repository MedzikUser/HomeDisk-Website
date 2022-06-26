import {
    ChangeEventHandler as ReactChangeEventHandler,
    KeyboardEvent as ReactKeyboardEvent,
    useEffect,
    useState,
} from "react";
import { useCookies } from "react-cookie";
import Router from "next/router";
import Head from "next/head";
import Container from "../components/container";
import Description from "../components/description";
import Error from "../components/auth/error";
import Button from "../components/auth/button";
import api from "../utils/api";
import TextFieldUsername from "../components/auth/field-username";
import TextFieldPassword from "../components/auth/field-password";

export default function Home() {
    // cookies manager
    const [cookies, setCookies] = useCookies(["token"]);

    // if user is logged in redirect to dashboard
    useEffect(() => {
        if (cookies.token) {
            Router.push("/user/dashboard");
        }
    }, [cookies]);

    // error message
    const [error, setError] = useState("");
    // username value
    const [username, setUsername] = useState("");
    // password value
    const [password, setPassword] = useState("");

    // handle change username value
    const handleUsernameChange: ReactChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setUsername(value);
    };

    // handle change password value
    const handlePasswordChange: ReactChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    // handle click "Enter (Return)"
    const handleKeyPress = (event: ReactKeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13 || event.charCode === 13) {
            handleLogin();
        }
    };

    // handle login
    const handleLogin = () => {
        const request = api.login(username, password);

        // send request to api
        request
            // wait for a server send response
            .then((token) => {
                // set cookie
                setCookies("token", token);
                // clear error value
                setError("");
            })
            // set error message
            .catch((err) => setError(err.toString()));
    };

    return (
        <Container>
            <Head>
                <title>Login | HomeDisk</title>
            </Head>

            <Description>Sign in</Description>

            {/* If error show error message */}
            {error != "" && <Error>{error}</Error>}

            <TextFieldUsername
                value={username}
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
            />

            <TextFieldPassword
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
            />

            <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={handleLogin}
                disabled={username == "" || password == ""}
            >
                Login
            </Button>
        </Container>
    );
}

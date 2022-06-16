import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Router from 'next/router'
import Head from 'next/head'
import { TextField } from '@mui/material'
import Container from '../components/container'
import Button from '../components/auth/button'
import Description from '../components/description'
import api from '../utils/api'
import Error from '../components/auth/error'
import config from '../config'

export default function Home() {
    // cookies manager
    const [cookies, setCookies] = useCookies(["token"])

    // if user is logged in redirect to dashboard
    useEffect(() => {
        if (cookies.token) {
            Router.push("/user/dashboard")
        }
    }, [cookies])

    // error message
    const [error, setError] = useState("")
    // username value
    const [username, setUsername] = useState("")
    // password value
    const [password, setPassword] = useState("")

    // handle change username value
    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const value = event.target.value
        setUsername(value)
    }

    // handle change password value
    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const value = event.target.value
        setPassword(value)
    }

    // handle click "Enter (Return)"
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13 || event.which === 13 || event.charCode === 13) {
            handleLogin()
        }
    }

    // handle login
    const handleLogin = () => {
        const request = api.login(username, password)

        // send request to api
        request
            // wait for a server send response
            .then(token => {
                // set cookie
                setCookies("token", token)
                // clear error value
                setError("")
            })
            // set error message
            .catch(err => setError(err.toString()))
    }

    return (
        <Container>
            <Head>
                <title>Login | {config.title}</title>
            </Head>

            <Description>Sign in</Description>

            {/* If error show error message */}
            {error != "" && (
                <Error>{error}</Error>
            )}

            {/* Username input */}
            <TextField
                label="Username"
                placeholder="Username"
                margin="normal"
                value={username}
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
            />

            {/* Password input */}
            <TextField
                label="Password"
                placeholder="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
            />

            {/* Submit button */}
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
    )
}

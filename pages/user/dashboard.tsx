import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import Head from 'next/head'
import Router from 'next/router'
import Title from '../../components/title'
import Container from '../../components/container'
import config from '../../config'

export default function Home() {
    const [cookies] = useCookies(["token"])

    // if user is logged show cards for logged user
    useEffect(() => {
        if (!cookies.token) {
            Router.push('/login')
        }
    }, [cookies])

    return (
        <Container>
            <Head>
                <title>Dashboard | {config.title}</title>
            </Head>

            <Title>Dashboard</Title>

        </Container>
    )
}

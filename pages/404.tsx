import Head from 'next/head'
import { useEffect } from 'react'
import Card from '../components/cards/card'
import CardHome from '../components/cards/card-home'
import Container from '../components/container'
import Title from '../components/title'
import config from '../config'
import typingAnimation from '../utils/typing-animation'

export default function Home() {
    // Typing title animation
    useEffect(() => typingAnimation())

    return (
        <Container>
            <Head>
                <title>404 | {config.title}</title>
            </Head>

            <Title id="animatedText">404 | This page could not be found</Title>

            <CardHome href="/">
                <Card>
                    <h2>Home &rarr;</h2>
                    <p>Go to home page</p>
                </Card>
            </CardHome>
        </Container>
    )
}

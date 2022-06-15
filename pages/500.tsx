import Head from 'next/head'
import { useEffect } from 'react'
import Container from '../components/container'
import Title from '../components/title'
import typingAnimation from '../utils/typing-animation'

export default function Home() {
    // Typing title animation
    useEffect(() => typingAnimation())

    return (
        <Container>
            <Head>
                <title>500 | HomeDisk</title>
            </Head>

            <Title id="animatedText">500 | Server-side error occurred</Title>
        </Container>
    )
}

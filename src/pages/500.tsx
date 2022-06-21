import Head from "next/head";
import { useEffect } from "react";
import Container from "../components/container";
import Title from "../components/title";
import config from "../config";
import typingAnimation from "../utils/typing-animation";

export default function Home() {
    // Typing title animation
    useEffect(() => typingAnimation());

    return (
        <Container>
            <Head>
                <title>500 | {config.title}</title>
            </Head>

            <Title id="animatedText">500 | Server-side error occurred</Title>
        </Container>
    );
}

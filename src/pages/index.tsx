import { useEffect, useState } from "react";
import Head from "next/head";
import { useCookies } from "react-cookie";
import Card from "../components/cards/card";
import CardRegister from "../components/cards/card-register";
import CardSignin from "../components/cards/card-signin";
import Grid from "../components/cards/grid";
import Container from "../components/container";
import Description from "../components/description";
import Title from "../components/title";
import typingAnimation from "../utils/typing-animation";
import CardDashboard from "../components/cards/card-dashboard";

export default function Home() {
    const [cookies] = useCookies(["token"]);

    // Typing title animation
    useEffect(() => typingAnimation());

    // display cards for a not logged user
    const [cards, setCards] = useState(<CardsNotLogged />);

    // if user is logged show cards for logged user
    useEffect(() => {
        if (cookies.token) {
            setCards(<CardsLogged />);
        }
    }, [cookies]);

    return (
        <Container>
            <Head>
                <title>HomeDisk</title>
            </Head>

            <Title id="animatedText">Welcome to HomeDisk!</Title>

            <Description>
                Fast and lightweight local cloud for your data written in Rust
            </Description>

            <Grid>{cards}</Grid>
        </Container>
    );
}

function CardsNotLogged() {
    return (
        <>
            {/* Sign in card */}
            <CardSignin href="/login">
                <Card>
                    <h2>Sign in &rarr;</h2>
                    <p>Log in to your account</p>
                </Card>
            </CardSignin>

            {/* Register card */}
            <CardRegister href="/register">
                <Card>
                    <h2>Register &rarr;</h2>
                    <p>Create a new account</p>
                </Card>
            </CardRegister>
        </>
    );
}

function CardsLogged() {
    return (
        <>
            {/* Dashboard card */}
            <CardDashboard href="/user/dashboard">
                <Card>
                    <h2>Dashboard &rarr;</h2>
                    <p>Go to dashboard</p>
                </Card>
            </CardDashboard>
        </>
    );
}

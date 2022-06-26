import { useEffect } from "react";
import { useCookies } from "react-cookie";
import Head from "next/head";
import Router from "next/router";
import Container from "../../components/container";
import Table from "../../components/user/table";
import Description from "../../components/description";

export default function Home() {
    const [cookies] = useCookies(["token"]);

    // if user is logged show cards for logged user
    useEffect(() => {
        if (!cookies.token) {
            Router.push("/login");
        }
    }, [cookies]);

    return (
        <Container>
            <Head>
                <title>Dashboard | HomeDisk</title>
            </Head>

            <Description>Dashboard</Description>

            <Table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Size</td>
                        <td>Modified</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Name of the file</td>
                        <td>Size of the file</td>
                        <td>Unknown</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

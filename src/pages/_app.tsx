import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import colors from "../colors";

const GlobalStyle = createGlobalStyle`
    * {
        color-scheme: dark;
    }

    body {
        font-family: 'Open Sans';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
`;

const theme = {
    colors,
};

const muiThene = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />

            <MuiThemeProvider theme={muiThene}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </MuiThemeProvider>
        </>
    );
}

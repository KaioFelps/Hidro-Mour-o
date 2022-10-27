import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body {
        min-height: 100vh;
        background: ${p => p.theme["background"]};
        color: ${p => p.theme["gray-300"]};
        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
	    font-weight: 400;
	    font-size: 1rem;
	    -webkit-font-smoothing: antialiased;
    }

    :focus-visible {
        outline: 2px solid ${p => p.theme["blue-500"]};
    }

    h1 {
        font-size: 2.5rem;
        color: ${p => p.theme["white"]};
        font-weight: 700;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
    }
`
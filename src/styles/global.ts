import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    body {
        height: 100vw;
        background: ${p => p.theme["background"]} url("../../../public/bg-lights.svg") top center no-repeat;
        backdrop-filter: blur(300px);
        color: ${p => p.theme["gray-300"]};
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
    }

    h2 {
        font-size: 1.5rem;
    }
`
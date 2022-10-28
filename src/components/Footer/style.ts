import styled from "styled-components";
import { LinkButton } from "../LinkButton";

export const InformationsRows = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .buttons {
        display: flex;
        gap: 1rem;
    }

    span {
        color: ${p => p.theme["white"]};
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size:  0.75rem;
    }
`

export const FooterContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    nav ul {
        display: flex;
        gap: 2rem;
    }

    nav ul li { list-style: none; }

    nav ul li a {
        text-decoration: none;
        color: ${p => p.theme["gray-300"]};
        font-size: 1rem;
        font-weight: bold;
        font-family: "Roboto", sans-serif;

        &:hover {
            color: ${p => p.theme["blue-300"]};
            transition: color .2s;
        }
    }

    img {
        width: 500px;
    }

    hr {
        border: 0;
        height: 1px;
        width: 100%;

        background: #ffffff10;
    }
`

export const FooterContainer = styled.footer`
    width: calc(100% + 40px);
    padding: 64px 20px 72px;
    background: ${p => p.theme["gray-900"]};

    border-width: 2px 0 0 0;
    border-style: solid;
    border-color: ${p => p.theme["blue-500"]};

    @media (max-width: 1120px) {
        ${InformationsRows} {
            flex-direction: column;
            gap: 1rem;
        }

        img {
            display: none;
        }
    }

    @media (max-width: 768px) {
        span {
            display: none;
        }

        ${InformationsRows} .buttons {
            flex-direction: column;
            width: 100%;

            a {
                width: 100%;
            }
        }
    }
`
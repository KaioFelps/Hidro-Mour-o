import styled, { css } from "styled-components";
import { BackgroundWrapper } from "../../layouts/DefaultLayout/styles"


export const Storyset = styled.a`
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;
    color: ${p => p.theme["gray-400"]};
    opacity: 0.6;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    position: absolute;
    right: 0;

    max-width: 100vw;
    overflow: hidden;

    opacity: 0.4;

    @media (max-width: 412px) {
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const ErrorContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    z-index: 1;

    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1.125rem;
        font-weight: 500;
        text-align: left;
        margin-top: 32px;
    }
`

export const ErrorContainer = styled.main`
    position: relative;

    width: 100%;
    max-width: 1120px;
    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    margin: 300px 0;

    @media (max-width: 412px) {
        margin: 0
    }
`

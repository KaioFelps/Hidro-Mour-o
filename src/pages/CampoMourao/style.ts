import styled, { keyframes } from "styled-components";

const floatingAnchorAnimation = keyframes`
    0%, 100% {top: 4px;}
    50% {top: 16px;}
`


export const ImagesRowContainer = styled.div`
    width: 100vw;
    padding: 64px 20px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    background: ${p => p.theme["gray-900"]};
    border-width: 2px 0;
    border-style: solid;
    border-color: ${p => p.theme["blue-500"]};

    figure {
        position: relative;
    }

    img {
        border-radius: 4px;
        width: 100%;
        height: 400px;

        object-fit: cover;
        object-position: center;
    }

    figcaption {
        position: absolute;
        bottom: -50px;
        margin: 12px;
        padding: 12px;
        background: #00000099;
        backdrop-filter: blur(50px);

        font-size: 1rem;
        color: ${p => p.theme["white"]};
        font-family: "Inter", sans-serif;

        transition: bottom .2s, opacity .2s;
        opacity: 0;
        pointer-events: none;
    }

    figure:has(img:hover) > figcaption {
        bottom: 0;
        pointer-events: auto;
        opacity: 1;
    }

    @media (max-width: 1120px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 412px) {
        grid-template-columns: 1fr;
    }
`

export const ParagraphContainer = styled.div`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;

    p {
        color: ${p => p.theme["white"]};
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    p:not(:last-child) {
        margin-bottom: 1.5rem;
    }
`

export const HeaderImg = styled.img`
    width: 100vw;
    height: 500px;

    object-fit: cover;
    object-position: center 55%;
`

export const Title = styled.div`
    h1, h2 {
        text-align: center;
    }

    h2 {
        margin-top: 1.5rem;
    }
`

export const PageHeader  = styled.section`
    max-width: 760px;
    width: 100;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        line-height: 0;
        background: transparent;
        width: 40px;
        height: 56px;
        position: relative;
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 4px 0;

        border-radius: 999px;
        border: 4px solid ${p => p.theme["blue-500"]};

        svg {
            color: ${p => p.theme["blue-500"]};

            position: absolute;
            top: 4px;

            animation: ${floatingAnchorAnimation} 1.3s infinite 2s;
        }
    }
`

export const PageContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    gap: 72px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .saturate {
        filter: saturate(1.5);
    }
`
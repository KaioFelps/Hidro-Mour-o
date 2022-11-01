import styled, { keyframes } from "styled-components";

const floatingAnchorAnimation = keyframes`
    0%, 100% {top: 4px;}
    50% {top: 16px;}
`



export const ParagraphContainer = styled.div`
    width: 100%;

    p {
        color: ${p => p.theme["gray-300"]};
        font-family: "Inter", sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
    }

    p:not(:last-child) {
        margin-bottom: 1.5rem;
    }
`

export const HeaderImg = styled.img`
    width: calc(100vw - 10px);
    height: 60vh;

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

export const AboutUsContainer = styled.section`
    width: 100%;
    max-width: 1120px;

    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 32px;

    img {
        width: 350px;
        padding: 12px;

        background: ${p => p.theme["white"]};
        border-radius: 12px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        img {
            width: 100%;
        }
    }
`

export const PageHeader  = styled.section`
    max-width: 760px;
    width: 100;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
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
    gap: 136px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .saturate {
        filter: saturate(1.5);
    }
`
import styled, {keyframes} from "styled-components";

const floatingAnchorAnimation = keyframes`
    0%, 100% {top: 4px;}
    50% {top: 16px;}
`

export const HomeContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    gap: 136px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomeHeader = styled.section`
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

export const Title = styled.div`
    h1, h2 {
        text-align: center;
    }

    h2 {
        margin-top: 1.5rem;
    }
`

export const ImagesContainer = styled.div`
    width: 100%;
    max-width: 576px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    figure {
        width: 100%;

        p {
            margin: 0;
        }

        img {
            width: 100%;
            border-radius: 12px;
            margin: 0;
        }

        figcaption {
            font-size: 0.75rem;
            color: ${p => p.theme["white"]};
            font-weight: 400;;
            margin-top: 1rem;
        }
    }
`

export const AsideContainer = styled.aside`
    width: 100%;
    max-width: 480px;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const StyledParagraphContainer = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background: rgba(34, 34, 34, 0.6);
    backdrop-filter: blur(50px);

    padding: 3rem;
    box-shadow: inset 0px 0px 0px 2px ${p => p.theme["blue-500"]},
                -318px 901px 382px rgba(0, 0, 0, 0.01),
                -179px 507px 322px rgba(0, 0, 0, 0.05),
                -79px 225px 239px rgba(0, 0, 0, 0.09),
                -20px 56px 131px rgba(0, 0, 0, 0.1),
                0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    
    p {
        font-size: 1rem;
        font-weight: 400;
        font-family: "Inter", sans-serif;
        color: ${p => p.theme["white"]};
        margin: 0;
    }
`

export const InformationsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr;
        gap: 6rem;

        ${ImagesContainer} {
            grid-row: 2 / 2;
        }

        ${ImagesContainer}, ${AsideContainer} {
            max-width: unset;
        }
    }
`

export const ExplanationParagraphs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        margin: 0;
        padding: 0;

        color: ${p => p.theme["gray-300"]};
        font-size: 1rem;
        font-weight: 400;
        font-family: "Inter", sans-serif;
    }
`

export const ExplanationTitle = styled.header`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;

    i {
        padding: 1rem;
        background: #FFFFFF;
        box-shadow: 0px 188px 75px rgba(8, 7, 44, 0.02), 0px 106px 63px rgba(8, 7, 44, 0.08), 0px 47px 47px rgba(8, 7, 44, 0.13), 0px 12px 26px rgba(8, 7, 44, 0.15), 0px 0px 0px rgba(8, 7, 44, 0.15);
        border-radius: 999px;
        line-height: 0;

        svg {
            color: ${p => p.theme["blue-500"]}
        }
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.25rem;
        text-align: left;

        color: ${p => p.theme["white"]};

        text-shadow: 0px 188px 75px rgba(8, 7, 44, 0.02),
                    0px 106px 63px rgba(8, 7, 44, 0.08),
                    0px 47px 47px rgba(8, 7, 44, 0.13),
                    0px 12px 26px rgba(8, 7, 44, 0.15),
                    0px 0px 0px rgba(8, 7, 44, 0.15);

    }
`

export const ExplanationContent = styled.div`
    width: 100%;
    max-width: 1120px;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin: 0 auto;
`

export const ExplanationContainer = styled.section`
    /* width: 100%; */
    width: calc(100vw - 10px);
    padding: 64px 20px;

    border-width: 2px 0;
    border-style: solid;
    border-color: ${p => p.theme["blue-500"]};

    background: ${p => p.theme["gray-900"]};
    /* box-shadow: 0 0 0 100vmax ${p => p.theme["gray-900"]};
    clip-path: inset(0 -100vmax); */
`
import styled from "styled-components";
import { Footer } from "../../components/Footer";

export const LayoutContainer = styled.div`
    width: 100%;
    padding: 0 20px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 136px;
`

export const BackgroundLights = styled.div`
    width: 2184px;
    height: 1247px;

    position: absolute;
    top: -200px;
    left: 50%;

    transform: translatex(-50%);
    pointer-events: none;

    background: url("/background-lights.jpg") no-repeat;
    z-index: -1;

    @media (max-width: 768px) {
        left: unset;
        right: -100px;
        top: -500px;
        transform: none;
    }

    @media (max-width: 412px) {
        top: -421px;
        right: -1354px;
        height: 1400px;
    }
`

export const BackgroundWrapper = styled.div`
    max-width: 100%;
    width: 100%;
    overflow-x: hidden;
    position: absolute;
    left: 0;
    height: 1400px;

    pointer-events: none;
    z-index: -1;

    @media (max-width:412px) {
        height: 600px;
        overflow: hidden;
    }
`
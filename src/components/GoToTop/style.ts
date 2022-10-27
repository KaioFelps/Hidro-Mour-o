import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 1rem;
    border-radius: 999px;
    border: 2px solid ${p => p.theme["blue-500"]};
    background: ${p => p.theme["gray-900"]};
    line-height: 0;

    box-shadow: 0px 62px 25px rgba(0, 0, 0, 0.02),
                0px 35px 21px rgba(0, 0, 0, 0.08),
                0px 15px 15px rgba(0, 0, 0, 0.13),
                0px 4px 9px rgba(0, 0, 0, 0.15),
                0px 0px 0px rgba(0, 0, 0, 0.15);

    svg {
        color: ${p => p.theme["white"]};
    }

    position: fixed;
    right: 12px;
    /* bottom: 64px; */

    cursor: pointer;
    transition: filter .2s, bottom .5s;

    &:hover {
        filter: brightness(0.8);
    }

    &:active {
        filter: brightness(1.1);
    }

    &[data-hidden="true"] {
        bottom: -10vmax;
    }

    &[data-hidden="false"] {
        bottom: 64px;
    }

    @media (max-width: 768px) {
        width: calc(100% - 10px);
        right: 5px;
        padding: 0.5rem;

        &[data-hidden="false"] {
            bottom: 5px;
        }
    }
`
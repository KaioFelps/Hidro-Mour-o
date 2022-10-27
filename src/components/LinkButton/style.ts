import styled, { css } from "styled-components";

type ButtonVariant = {
    variant: "primary" | "secondary";
}

export const ButtonContainer = styled.div<ButtonVariant>`
    a {
        outline-width: 4px;
        outline-style: dashed;
        outline-offset: -2px;
        border-radius: 6px;
        padding: 1rem 1.5rem;

        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        text-decoration: none;

        display: flex;
        align-items: center;
        gap: 10px;

        width: fit-content;
        cursor: pointer;
        user-select: none;

        filter: brightness(1);

        ${p => {
            if(p.variant === "primary") {
                return css`
                    background: ${p.theme["blue-500"]};
                    outline-color: ${p.theme["blue-700"]};
                    color: ${p => p.theme["white"]};
                    transition: all .2s;

                    &:hover {
                        filter: brightness(0.9);
                    }

                    &:active {
                        background: ${p.theme["blue-600"]};
                        outline-color: ${p.theme["blue-700"]};

                        transition: all 0s;
                    }
                `
            }

            if(p.variant === "secondary") {
                return css`
                    background: ${p.theme["white"]};
                    outline-color: ${p.theme["gray-300"]};
                    color: ${p.theme["background"]};
                    transition: all .2s;

                    &:hover {
                        filter: brightness(0.9);
                    }

                    &:active {
                        background: ${p.theme["gray-300"]};
                        outline-color: ${p.theme["gray-400"]};

                        transition: all 0s;
                    }
                `
            }
        }}
    }
`
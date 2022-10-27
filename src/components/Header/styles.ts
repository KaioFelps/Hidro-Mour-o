import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 1120px;
    width: 100%;
    padding: 2rem 0;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #ffffff10;

    nav ul {
        display: flex;
        gap: 24px;

        li {
            list-style: none;
            position: relative;
        }

        li a {
            text-decoration: none;
            color: ${p => p.theme["gray-300"]};
            font-weight: 500;
            font-size: 0.875rem;

            &:hover {
                color: ${p => p.theme["white"]};
                transition: all .2s;
            }

            &.active {
                color: ${p => p.theme["white"]};
                transition: all .2s;

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -10px;

                    height: 5px;
                    width: 100%;
                    border-radius: 999px;

                    background: ${p => p.theme["blue-500"]};
                }
            }

            @media (max-width: 768px) {
                display: none;
            }
        }
    }
`

export const MenuButton = styled.button`
    line-height: 0;
    /* display: flex; */
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: ${p => p.theme["white"]};
    border: 0;
    border-radius: 999px;
    padding: 8px;

    transition: background .2s;
    display: none;

    &:hover {
        background-color: #ffffff10;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const MobileNavigation = styled.nav`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${p => p.theme["background"]};

    /* display: flex; */
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
    padding: 2rem;

    a {
        width: 100%;
        text-decoration: none;
        color: ${p => p.theme["gray-300"]};
        font-size: 1rem;
        font-weight: 800;
        
        padding: 1rem;
        border-radius: 4px;
        background: #ffffff05;

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;

            height: 100%;
            width: 0;
            
            background: ${p => p.theme["blue-500"]};
            transition: width .2s;
        }

        :hover {
            background: ${p => p.theme["blue-800"]};
            transition: background .2s;
        }

        &:hover:not(.active)::before {
            width: 5px;
        }

        &.active {
            background: ${p => p.theme["gray-900"]};
        }
    }

    button {
        line-height: 0;
        background: #ffffff10;
        color: ${p => p.theme["gray-300"]};
        border: 0;
        border-radius: 4px;

        padding: 4px;
        width: fit-content;
        
        margin-bottom: 1rem;
        transition: background .2s;

        &:hover {
            color: ${p => p.theme.white};
            background: ${p => p.theme["black"]};
        }
    }

    transition: all .2s;

    z-index: 999;
    display: none;
    top: -100vw;
    opacity: 0;
    pointer-events: none;

    &.active {
        top: 0;
        opacity: 1;
        pointer-events: auto;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`
import { HeaderContainer, MenuButton, MobileNavigation } from "./styles";
import logo from "../../../public/logo.svg"
import { NavLink } from "react-router-dom";
import { List, X } from "phosphor-react"

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} />

            <nav>
                <ul>
                    <li><NavLink to="/">Início</NavLink></li>
                    <li><NavLink to="/campo-mourao">Campo Mourão</NavLink></li>
                    <li><NavLink to="/about">Sobre nós</NavLink></li>
                </ul>
            </nav>

            <MenuButton onClick={openMenu}><List size={32} weight="fill" /></MenuButton>

            <MobileNavigation id="mobile-nav">
                <button onClick={closeMenu}><X size={32} weight="fill" /></button>

                <NavLink to="/">Início</NavLink>
                <NavLink to="/campo-mourao">Campo Mourão</NavLink>
                <NavLink to="/about">Sobre nós</NavLink>
            </MobileNavigation>
        </HeaderContainer>
    )
}

function openMenu() {
    const mobileNav = document.querySelector("#mobile-nav")

    mobileNav!.classList.add("active")
}

function closeMenu() {
    const mobileNav = document.querySelector("#mobile-nav")

    mobileNav!.classList.remove("active")
}
import { HeaderContainer, HeaderContent } from "./styles";
import logo from "../../../public/logo.svg"
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />

                <nav>
                    <ul>
                        <li><NavLink to="/">Início</NavLink></li>
                        <li><NavLink to="/">Campo Mourão</NavLink></li>
                        <li><NavLink to="/">Sobre nós</NavLink></li>
                    </ul>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}
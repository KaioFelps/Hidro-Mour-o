import { NavLink } from "react-router-dom";
import { FooterContainer, FooterContent, InformationsRows } from "./style";
import logo from "/logo.svg"
import { LinkButton } from "../LinkButton";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <InformationsRows>
                    <nav>
                        <ul>
                            <li><NavLink to="/campo-mourao">Campo Mourão</NavLink></li>
                            <li><NavLink to="/sobre">Sobre nós</NavLink></li>
                            <li><NavLink to="/">Ir ao início</NavLink></li>
                        </ul>
                    </nav>
                    <img src={logo} alt="Hidro Mourão" />
                </InformationsRows>

                <hr />

                <InformationsRows>
                    <span>Produção por Kaio Felipe, Larissa, Luana Nayely e Maiara Vitória.</span>

                    <div className="buttons">
                        <LinkButton isBlank={true} hasIcon={true} icon="instagram" link="https://www.instagram.com/colegioato/">Siga o colégio</LinkButton>
                        <LinkButton isBlank={true} hasIcon={true} icon="instagram" link="https://www.instagram.com/voz_e_atitude/">Siga o grêmio estudantil</LinkButton>
                    </div>
                </InformationsRows>
            </FooterContent>
        </FooterContainer>
    )
}
import { ArrowCircleUpRight, InstagramLogo } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ButtonContainer } from "./style";

type ButtonTypes = {
    variant?: "primary" | "secondary";
    hasIcon?: boolean;
    icon?: "instagram" | "arrowUp";
    children: React.ReactNode;
    link?: string;
    isBlank: boolean;
}

export function LinkButton({isBlank, hasIcon = false, icon, variant = "primary", children, link = "/"}: ButtonTypes) {
    return (
        <ButtonContainer variant={variant}>
            {isBlank === false ? (
                <NavLink to={link}>
                    {hasIcon === true && icon === "instagram" ? <InstagramLogo size={24} weight="bold" /> : ""}
                    {hasIcon === true && icon === "arrowUp" ? <ArrowCircleUpRight size={24} weight="bold" /> : ""}
                    {children}
                </NavLink>
            ) : ""}
            
            {isBlank === true ? (
                <a href={link} target="_blank">
                    {hasIcon === true && icon === "instagram" ? <InstagramLogo size={24} weight="bold" /> : ""}
                    {hasIcon === true && icon === "arrowUp" ? <ArrowCircleUpRight size={24} weight="bold" /> : ""}
                    {children}
                </a>
            ) : ""}
        </ButtonContainer>
    )
}
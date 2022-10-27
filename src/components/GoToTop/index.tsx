import { ArrowUp } from "phosphor-react";
import { ButtonContainer } from "./style";

export function GoToTop() {
    return (
        <ButtonContainer onClick={ScrollToTop}>
            <ArrowUp size={32} weight="bold" />
        </ButtonContainer>
    )
}

function ScrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
    })
}
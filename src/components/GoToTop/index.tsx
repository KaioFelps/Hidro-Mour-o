import { ArrowUp } from "phosphor-react";
import { ButtonContainer } from "./style";
import { useRef } from "react";

export function GoToTop() {
    return (
        <ButtonContainer type="button" aria-label='ir para o topo' data-hidden="true" onClick={ScrollToTop}>
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

function ShowButton () {
    const screenHeight = window.innerHeight
    const currentHeight = window.scrollY
    const button = document.querySelector("[aria-label='ir para o topo']")

    if(currentHeight >= screenHeight / 6) {
        button!.setAttribute("data-hidden", "false")
    } else {
        button!.setAttribute("data-hidden", "true")
    }
}

window.addEventListener("scroll", ShowButton)
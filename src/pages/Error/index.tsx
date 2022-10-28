import { ErrorContainer, ErrorContent, ImageContainer, Storyset } from "./style";
import image from "/Forest-amico.svg"

export function ErrorPage() {
    return (
        <ErrorContainer>
            <ImageContainer>
                <img src={image} alt="um rio passando dentre uma ilha azul." />
                <Storyset href="https://storyset.com/nature">Ilustração por StorySet</Storyset>
            </ImageContainer>

            <ErrorContent>
                <h1>Se perdeu, margarida?</h1>
                <p>Para sua tristeza, essa página ainda não existe! Tente entrar uma página válida através do menu de navegação.</p>
            </ErrorContent>
        </ErrorContainer>
    )
}
{/* <a href="">Nature illustrations by Storyset</a> */}
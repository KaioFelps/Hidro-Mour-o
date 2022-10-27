import { AsideContainer, ExplanationContainer, ExplanationContent, ExplanationParagraphs, ExplanationTitle, HomeContainer, HomeHeader, ImagesContainer, InformationsContainer, StyledParagraphContainer, Title } from "./styles";
import { ArrowDown, Drop } from "phosphor-react"
import { LinkButton } from "../../components/LinkButton";

export function Home() {
    return (
        <HomeContainer>
            <HomeHeader>
                <Title>
                    <h1>Projeto de conscientização sobre o assoreamento dos rios</h1>
                    <h2>Entenda mais sobre tal problema ambiental</h2>
                </Title>

                <a aria-label="botão para ir à próxima seção do site" onClick={GoToSection}>
                    <ArrowDown size={24} weight="bold" />
                </a>
            </HomeHeader>

            <InformationsContainer>
                <ImagesContainer>
                    <figure>
                        <p><img src="../../public/rio-assoreado-reprodução.png" alt="Imagem de um rio assoreado com uma arvore ao lado e uma ilhota ao fundo." /></p>
                        <figcaption>Imagem de reprodução. Retirado de Todo Estudo.</figcaption>
                    </figure>

                    <figure>
                        <p><img src="../../public/explicacao-rio-assoreado.png" alt="Imagem de um rio assoreado com uma arvore ao lado e uma ilhota ao fundo." /></p>
                        <figcaption>Imagem explicando o assoreamento. Por M&F Ambiental e Obras.</figcaption>
                    </figure>
                </ImagesContainer>

                <AsideContainer>
                    <StyledParagraphContainer>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.
                        </p>
                    </StyledParagraphContainer>

                    <LinkButton isBlank={false} hasIcon={true} icon="arrowUp">Ver um caso real</LinkButton>
                </AsideContainer>
            </InformationsContainer>

            <ExplanationContainer>
                <ExplanationContent>
                    <ExplanationTitle>
                        <i><Drop size={32} weight="bold" /></i>

                        <h3>Quando acontece o assoreamento?</h3>
                    </ExplanationTitle>

                    <ExplanationParagraphs>
                        <p>
                            Fusce imperdiet massa sodales suscipit gravida. Sed gravida at felis in pharetra. Integer facilisis arcu dolor, et finibus augue facilisis nec. Phasellus id egestas sem. Donec vestibulum libero sed lorem sollicitudin ullamcorper in vitae nisl. Nunc turpis nulla, hendrerit id metus sit amet, ultricies rutrum nisi. Fusce eget ex at tortor pellentesque varius eget venenatis neque. Etiam auctor felis velit, ut tristique eros hendrerit eget. Nulla urna massa, interdum non magna nec, lobortis aliquet nisi. Integer mollis sem lorem, a viverra eros laoreet a. Curabitur vitae auctor augue, eget condimentum eros. Maecenas vel eros id metus tincidunt imperdiet eget at augue. Donec euismod odio mi. Vestibulum enim arcu, elementum faucibus ante ut, iaculis pulvinar nunc.
                        </p>
                        <p>
                            Fusce imperdiet massa sodales suscipit gravida. Sed gravida at felis in pharetra. Integer facilisis arcu dolor, et finibus augue facilisis nec. Phasellus id egestas sem. Donec vestibulum libero sed lorem sollicitudin ullamcorper in vitae nisl. Nunc turpis nulla, hendrerit id metus sit amet, ultricies rutrum nisi. Fusce eget ex at tortor pellentesque varius eget venenatis neque. Etiam auctor felis velit, ut tristique eros hendrerit eget. Nulla urna massa, interdum non magna nec, lobortis aliquet nisi. Integer mollis sem lorem, a viverra eros laoreet a. Curabitur vitae auctor augue, eget condimentum eros. Maecenas vel eros id metus tincidunt imperdiet eget at augue. Donec euismod odio mi. Vestibulum enim arcu, elementum faucibus ante ut, iaculis pulvinar nunc.
                        </p>
                        <p>
                            Fusce imperdiet massa sodales suscipit gravida. Sed gravida at felis in pharetra. Integer facilisis arcu dolor, et finibus augue facilisis nec. Phasellus id egestas sem. Donec vestibulum libero sed lorem sollicitudin ullamcorper in vitae nisl. Nunc turpis nulla, hendrerit id metus sit amet, ultricies rutrum nisi. Fusce eget ex at tortor pellentesque varius eget venenatis neque. Etiam auctor felis velit, ut tristique eros hendrerit eget. Nulla urna massa, interdum non magna nec, lobortis aliquet nisi. Integer mollis sem lorem, a viverra eros laoreet a. Curabitur vitae auctor augue, eget condimentum eros. Maecenas vel eros id metus tincidunt imperdiet eget at augue. Donec euismod odio mi. Vestibulum enim arcu, elementum faucibus ante ut, iaculis pulvinar nunc.
                        </p>
                    </ExplanationParagraphs>
                </ExplanationContent>
            </ExplanationContainer>
        </HomeContainer>
    )
}

function GoToSection() {
    window.scrollTo({
        top: 544,
        left: 0,
    })
}
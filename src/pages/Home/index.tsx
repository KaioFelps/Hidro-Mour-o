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

                <button type="button" aria-label="botão para ir à próxima seção do site" onClick={GoToSection}>
                    <ArrowDown size={24} weight="bold" />
                </button>
            </HomeHeader>

            <InformationsContainer>
                <ImagesContainer>
                    <figure>
                        <p><img src="/rio-assoreado-reprodução.png" alt="Imagem de um rio assoreado com uma arvore ao lado e uma ilhota ao fundo." /></p>
                        <figcaption>Imagem de reprodução. Retirado de Todo Estudo.</figcaption>
                    </figure>

                    <figure>
                        <p><img src="/explicacao-rio-assoreado.png" alt="Imagem de um rio assoreado com uma arvore ao lado e uma ilhota ao fundo." /></p>
                        <figcaption>Imagem explicando o assoreamento. Por M&F Ambiental e Obras.</figcaption>
                    </figure>
                </ImagesContainer>

                <AsideContainer>
                    <StyledParagraphContainer>
                        <p>
                            Você sabe o que é o assoreamento dos rios? Esse grave problema ambiental é muito presente em vários lugares ao redor do mundo, provavelmente na sua cidade também! Consegue advinhar do que se trata?
                        </p>

                        <p>
                            Tal como é exibido na imagem ao lado, o ciclo do assoreamento de um rio começa quando o ser humano intervém na natureza, retirando as <strong>matas ciliares</strong>, que servem para mais que formar uma paisagem agradável: protegem o rio.
                        </p>

                        <p>
                            Suas raizes deixam a terra firme, e impedem que, com a água da chuva, a terra se sedimente com maior velocidade e desmorone — a <strong>erosão</strong> — derrubando, então, partículas da terra e rochas dentro do rio. Isso tudo vai acumulando-se no rio e acaba por soterrá-lo: é quando o rio estará assoreado.
                        </p>

                        <p>
                            Sendo assim, vemos que a destruição de um rio inteiro pode acontecer pela falta das matas ciliares, aquela bela vegetação que rodeia um rio. Mas afinal, que malefícios essa situação pode trazer à sociedade? Existem meios de impedir que isso aconteça ou até mesmo reverter a situação? <i>Arrasta pra baixo!</i>
                        </p>

                        <p>Quer conhecer um caso real no município de Campo Mourão? Nesse caso, basta clicar no botão abaixo.</p>
                    </StyledParagraphContainer>

                    <LinkButton isBlank={false} hasIcon={true} link="/campo-mourao" icon="arrowUp">Ver um caso real</LinkButton>
                </AsideContainer>
            </InformationsContainer>

            <ExplanationContainer>
                <ExplanationContent>
                    <ExplanationTitle>
                        <i><Drop size={32} weight="bold" /></i>
                        <h3>Problemas causados pelo assoreamento</h3>
                    </ExplanationTitle>
                    <ExplanationParagraphs>
                        <p>
                           Uma vez que o rio é assoreado, o curso deste rio é alterado. A partir disso se derivam vários e vários outros problemas ambientais e sociais, como os listados a seguir:

                           <ul>
                                <li>
                                    dificuldade para navegação e migração das vidas aquáticas;
                                </li>
                                <li>
                                    morte de espécies aquáticas deste rio, que não conseguem fazer fotossíntese ou se alimentar;
                                </li>
                                <li>
                                    aumento de possibilidades de enchentes, pois como parte do rio está ocupada por detritos, a água transborda perante a chuvas fortes;
                                </li>
                                <li>
                                    maior força das correntezas;
                                </li>
                                <li>
                                    dificulta a navegação.
                                </li>
                           </ul>
                        </p>
                    </ExplanationParagraphs>

                    <ExplanationTitle>
                        <i><Drop size={32} weight="bold" /></i>
                        <h3>Quais as soluções</h3>
                    </ExplanationTitle>
                    <ExplanationParagraphs>
                        <p>
                            Para impedir que tantos problemas aconteçam, basta <strong>não desmatar as matas ciliares</strong>, o que impedirá que os detritos cheguem ao rio. Para os rios que já foram afetados, replantar sua mata ciliar pode ajudá-lo a se recuperar.Além disso, conter a erosão e entrada de sedimentos e realizar uma limpeza também são maneiras para restaurá-lo.
                        </p>
                        <p>
                            Além de tudo isso, é imprescindível mencionar a conscientização da população e das indústrias, pois a falta de conhecimento sobre esse problema leva-os a descartarem lixos domésticos e industriais nos rios, o que, além de poluí-los, contribui para o assoreamento.
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
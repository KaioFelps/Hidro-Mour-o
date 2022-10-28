import { ArrowDown } from "phosphor-react"
import { Helmet } from "react-helmet"
import { AboutUsContainer, PageContainer, PageHeader, ParagraphContainer, Title } from "./style"
import ATO from "/colegio-ato.png"

export function Sobre() {
    return (
        <>
            <Helmet>
                <title>Sobre a Hidro Mourão</title>
                <meta name="description" content="Entenda a finalidade do projeto Hidro Mourão e descubra quem são os responsáveis." />
            </Helmet>
            <PageContainer>
                <PageHeader>
                    <Title>
                        <h1>Quem somos nós</h1>
                        <h2>Inteire-se de nossas causas, valores e missão</h2>
                    </Title>

                    <button type="button" aria-label="botão para ir à próxima seção do site" onClick={GoToSection}>
                        <ArrowDown size={24} weight="bold" />
                    </button>
                </PageHeader>

                <AboutUsContainer>
                    <img src={ATO} alt="" />

                    <ParagraphContainer>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.
                        </p>
                        
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.
                        </p>
                    </ParagraphContainer>
                </AboutUsContainer>
            </PageContainer>
        </>
    )
}

function GoToSection() {
    window.scrollTo({
        top: 544,
        left: 0,
    })
}
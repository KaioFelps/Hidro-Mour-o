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
                            O site Hidro Mourão surgiu no dia 31 de outubro de 2022, visando disponibilizar informações sobre o assoreamento dos rios, um problema ambiental grave que vem acontecendo há décadas sem ser levado a sério como deveria. Trazemos, por meio desta sítio na web, as principais causas, problemas e soluções acerca deste problema.
                        </p>
                        <p>
                            A ideia desse projeto é oriunda de um trabalho de geografia proposto aos estudantes do segundo ano, turma B, do colégio Antônio Teodoro de Oliveira, pela professora Rosiane Cristina Daniel. O objetivo do trabalho era criar um jeito inovador de entregar uma pesquisa relacionada a um determinado tema disponibilizado. Os alunos responsáveis pelo site são Kaio Felipe, Larissa Mendes, Luana Nayely e Maiara Vitória.
                        </p>
                        <p>
                            A intenção de construir um site surgiu no dia 20 de outubro, quando o grupo de estudantes supracitado deu início a produção de design e programação do site, estágio que perdurou até o dia 31 do mesmo mês.
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
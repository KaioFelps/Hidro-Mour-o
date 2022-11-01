import { ArrowDown } from "phosphor-react";
import { HeaderImg, ImagesRowContainer, PageContainer, PageHeader, ParagraphContainer, Title } from "./style";
import logo from "/page-header-image.jpg"
import riolimpeza from "/rio-mourao-processo-limpeza.jpeg"

import image1 from "/1.jpg"
import image2 from "/2.jpg"
import image3 from "/3.jpg"
import image4 from "/4.jpg"
import { Helmet } from "react-helmet";
import { css } from "styled-components";

export function CampoMourao() {

    return (
        <>
            <Helmet>
                <title>Situação de Campo Mourão</title>
                <meta name="description" content="Clique para acessar o site Hidro Mourão e ficar por dentro da situação deste problema hídrico no município de Campo Mourão." />
            </Helmet>
            <PageContainer>
                <PageHeader>
                    <Title>
                        <h1>A situação em Campo Mourão</h1>
                        <h2>Veja como está sendo tratado o problema no município de Campo Mourão</h2>
                    </Title>

                    <button type="button" aria-label="botão para ir à próxima seção do site" onClick={GoToSection}>
                        <ArrowDown size={24} weight="bold" />
                    </button>
                </PageHeader>

                <HeaderImg className="saturate" src={logo} alt="rio do Parque do Lago de Campo Mourão assoreado visto da ponte" />
                
                <ParagraphContainer>
                    <p>
                        Criado em 1 de maio de 1971, o Parque do Lago de Campo Mourão, inicialmente, era tratado como local de captação de água para abastecimento público do DAE (Departamento de Água e Esgoto). O Parque Municipal Joaquim Teodoro de Oliveira possui uma área de 263.687,55 m², localizando no Jardim Gutierrez em Campo Mourão, é o principal cartão postal da cidade e possui pista para caminhada, aparelhos para ginástica e atividades para toda família. É um dos locais mais visitados na região.
                    </p>
                    <p>
                        Com o tempo devido a falta de manutenção, o parque vem sofrendo diversos problemas como o assoreamento no lago, esse problemas estão sendo resolvidos pelos órgãos públicos e a prefeitura da cidade. Em relação a limpeza do Parque e notável a presença de lixo espalhado pelas trilhas, o principal motivo é falta de consciência ambiental dos visitantes.
                    </p>
                    <p>
                        Em 2013, na segunda-feirao (11) de março, foram abertas as compotas do lago, dando início ao projeto de desassoreamento do Rio Mourão, o rio que passa pelo Parque do Lago. A empresa Ivano Abdo Construções e Incorporações Ltda, em parceria com a prefeitura do município de Campo Mourão, se comprometeu a executar as obras necessárias. O projeto aconteceu durante o mandato da prefeita Regina Dubay, que alegava ser uma obra vital para a cidade, cujo ponto turístico principal é o parque.
                    </p>
                    <p>
                        <figure>
                            <img src={riolimpeza} alt="Rio Mourão em processo de desassoreamento" />
                            <figcaption>Rio Mourão em processo de desassoreamento. Imagens retiradas do vídeo <a href="https://www.youtube.com/watch?v=CVLFRYKoAq0" target="_blank">Obras desassoreamento Campo Mourao</a>, por Felipe Duarte.</figcaption>
                        </figure>
                    </p>
                    <p>
                        Durante um bom tempo, o estado do Parque do Lago esteve deplorável em função das obras de limpeza, contudo, após um tempo, o lago finalmente ficou limpo. Todavia, após vários anos desde então, o parque novamente se encontra numa situação deplorável e está mais do que na hora de colocar um novo projeto em ação para limpá-lo.
                    </p>
                    <p>
                        No rio que atravessa todo o espaço, é possível notar ilhotas que se formaram através da grande quantidade de resíduos e detritos amontoados, nas quais, inclusive, se prospera uma mata. Os pequenos lagos que estão pelo parque também estão sujos e implorando por limpeza.
                    </p>
                    <p>
                        Mais informações podem ser encontradas no site <a href="https://comunidadecm.wordpress.com/tag/parque-do-lago/" target="_blank">Campo Mourão Comunidade</a>.
                    </p>
                </ParagraphContainer>

                <ImagesRowContainer>
                    <figure>
                        <img className="saturate" src={image1} alt="Vista da trilha do Parque do Lago de Campo Mourão, na plataforma destruída" />
                        <figcaption>Vista da trilha do Parque do Lago de Campo Mourão, na plataforma destruída</figcaption>
                    </figure>

                    <figure>
                        <img className="saturate" src={image2} alt="Ponte do Parque do Lago de Campo Mourão e, ao lado, Rio do Campo com ilhotas de terras formadas pelo assoreamento" />
                        <figcaption>Ponte do Parque do Lago de Campo Mourão e, ao lado, Rio do Campo com ilhotas de terras formadas pelo assoreamento</figcaption>
                    </figure>

                    <figure>
                        <img className="saturate" src={image3} alt="Placa dizendo 'proteja a vegetação' e, ao fundo, ilhas de mato formadas pelo assoreamento do rio com dois patos sobre elas" />
                        <figcaption>Placa dizendo 'proteja a vegetação' e, ao fundo, ilhas de mato formadas pelo assoreamento do rio com dois patos sobre elas</figcaption>
                    </figure>

                    <figure>
                        <img className="saturate" src={image4} alt="Lago dentro do Parque do Lago sujo e parcialmente assoreado" />
                        <figcaption>Lago dentro do Parque do Lago sujo e parcialmente assoreado</figcaption>
                    </figure>
                    
                    
                    
                </ImagesRowContainer>
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
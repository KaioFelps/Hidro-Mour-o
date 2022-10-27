import { ArrowDown } from "phosphor-react";
import { HeaderImg, ImagesRowContainer, PageContainer, PageHeader, ParagraphContainer, Title } from "./style";
import logo from "/page-header-image.jpg"

import image1 from "/1.jpg"
import image2 from "/2.jpg"
import image3 from "/3.jpg"
import image4 from "/4.jpg"

export function CampoMourao() {
    return (
        <PageContainer>
            <PageHeader>
                <Title>
                    <h1>A situação em Campo Mourão</h1>
                    <h2>Veja como está sendo tratado o problema no município de Campo Mourão</h2>
                </Title>

                <a aria-label="botão para ir à próxima seção do site" onClick={GoToSection}>
                    <ArrowDown size={24} weight="bold" />
                </a>
            </PageHeader>

            <HeaderImg className="saturate" src={logo} alt="rio do Parque do Lago de Campo Mourão assoreado visto da ponte" />
            
            <ParagraphContainer>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mi ac nisl aliquam mattis in a neque. Cras lacinia, nulla blandit consectetur dictum, mi tortor pharetra mi, eu auctor libero risus sed augue. Proin aliquam dapibus orci. Proin dignissim semper sem sed scelerisque. Donec eu felis mattis, dapibus turpis sit amet, condimentum orci. Mauris hendrerit augue vel libero mattis, quis sollicitudin lacus interdum. Nullam posuere ex sed nisl consequat, eu volutpat augue fringilla. Aenean cursus ex eget porta consectetur. Donec a ex dictum, tincidunt metus sed, accumsan ex.
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
    )
}

function GoToSection() {
    window.scrollTo({
        top: 544,
        left: 0,
    })
}
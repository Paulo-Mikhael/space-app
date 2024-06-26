import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";
import { useState } from "react";

const ImagensContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`
const GaleriaContainer = styled.section`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, tags, setTagSelecionada, tagSelecionada }) => {
    return (
        <>
            <Tags 
                tags={tags}
                setTagSelecionada={setTagSelecionada}
                tagSelecionada={tagSelecionada}
            />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>
                        Navegue pela galeria
                    </Titulo>
                    <ImagensContainer>
                        {fotos.map(foto =>
                            <Imagem
                                aoZoomSolicitado={aoFotoSelecionada}
                                aoAlternarFavorito={aoAlternarFavorito}
                                foto={foto}
                                key={foto.id}
                            />
                        )}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;
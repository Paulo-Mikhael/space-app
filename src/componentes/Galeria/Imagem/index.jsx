import styled from "styled-components";
const ImagemEstilizada = styled.figure`
    width: ${props => props.$expandida ? '1248px' : '448px'};
    height: 336px;
    margin: 0;
    padding: 0;
    
    .mainImage{
        margin: 0;
        border-radius: 20px 20px 0px 0px;
        width: inherit;
        height: ${props => props.$expandida ? '448px' : '246px'};
    }
    figcaption{
        border-radius: 0px 0px 20px 20px;
        width: inherit - 50;
        height: 50px;
        display: flex;
        background-color: #001634;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;

        h3{
            font-weight: lighter;
            line-height: 130%;

            b{
                font-weight: bold;
            }
        }
    }
`
const IconesContainer = styled.div`
    width: 70px;
    display: flex;
    justify-content: right;
    gap: 24px;

    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`
const IconeExpandir = styled.img`
    display: ${props => props.$expandida ? 'none' : 'block'};
`

const Imagem = ({ foto, aoZoomSolicitado, expandida = false, aoAlternarFavorito }) => {

    const iconeFavorito = foto.favorita ? "icones/favorito-ativo.png" : "icones/favorito.png"

    return (
        <ImagemEstilizada $expandida={expandida}>
            <img className="mainImage" src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>
                    <b>{foto.titulo}</b><br/>{foto.fonte}
                </h3>
                <IconesContainer>
                    <img src={iconeFavorito} alt="" onClick={
                        () => {
                            aoAlternarFavorito(foto)
                        }
                    }/>
                    <IconeExpandir 
                        src="icones/expandir.png"
                        alt="" 
                        onClick={() => {
                            aoZoomSolicitado(foto)
                        }}
                        $expandida={expandida}
                    />
                </IconesContainer>
            </figcaption>
        </ImagemEstilizada>
    );
}

export default Imagem;
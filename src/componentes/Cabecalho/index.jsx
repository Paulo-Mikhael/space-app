import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;

    img{
        max-width: 212px;
    }
`

const Cabecalho = ({ pesquisa, mudaValor }) => {
    return (
        <HeaderEstilizado>
            <img src="imagens/logo.png" alt="logo da emmpresa" />
            <CampoTexto pesquisa={pesquisa} mudaValor={mudaValor}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho
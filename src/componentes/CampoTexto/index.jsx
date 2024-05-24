import styled from "styled-components"

const InputEstilizado = styled.div`
    padding: 12px, 16px, 12px, 16px;
    width: 602px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    border: 2px solid #C98CF1;
    border-radius: 10px;

    input{
        background-color: transparent;
        padding: 15px;
        width: 90%;
        font-size: 20px;
        color: white;
        border: none;

        &:focus{
            outline: none;
        }
    }
    img{
        cursor: pointer;
    }
`

const CampoTexto = () => {
    return (
        <InputEstilizado>
            <input type="text" placeholder="O que você procura?" />
            <img src="icones/search.png" alt="" />
        </InputEstilizado>
    )
}

export default CampoTexto;
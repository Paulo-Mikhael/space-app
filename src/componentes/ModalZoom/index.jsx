import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
    background-color: #0008;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 64px;
    background-color: transparent;
    border: none;
    position: absolute;
`
const BtnFechar = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 35px;
    right: 30px;
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay className="overlay"/>
                <DialogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <BtnFechar 
                            type="submit"
                            onClick={() => {
                                aoFechar();
                            }}
                        >
                            <img src="icones/fechar.png" alt="" />
                        </BtnFechar>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom;
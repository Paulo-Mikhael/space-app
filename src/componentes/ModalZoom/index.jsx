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
`

const ModalZoom = ({ foto, aoFechar }) => {
    return (
        <>
            {foto && <>
                <Overlay className="overlay"/>
                <DialogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true}/>
                    <form method="dialog">
                        <button 
                            type="submit"
                            onClick={() => {
                                aoFechar();
                            }}
                        >
                            ok
                        </button>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom;
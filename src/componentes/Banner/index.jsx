import { Children } from "react"
import styled from "styled-components"

const BannerEstilizado = styled.div`
    height: 328px;
    background-image: url('imagens/Foto destaque.png');
    position: relative;
    border-radius: 20px;
`
const H2Estilizado = styled.h2`
    width: 301px;
    height: 144px;
    font-weight: 400;
    font-size: 40px;
    color: #FFF;
    position: absolute;
    top: 55px;
    left: 64px;
`

const Banner = ({ texto }) => {
    return (
        <BannerEstilizado>
            <H2Estilizado>
                {texto}
            </H2Estilizado>
        </BannerEstilizado>
    )
}

export default Banner;
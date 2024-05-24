import styled from 'styled-components';
import tags from './tags.json';

const H3Estilizado = styled.h3`
    color: white;
    font-weight: 400;
    font-size: 24px;
    width: 219px;
`
const FlexContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 66px;
    height: 49px;
    align-items: center;
`
const TagEstilizada = styled.button`
    padding: 10px 8px;
    border: none;
    background-color: #d9d9d960;
    color: white;
    border-radius: 10px;
    font-weight: 400;
    font-size: 24px;
    cursor: pointer;
`

const Tags = () => {
    return (
        <>
            <FlexContainer>
                <H3Estilizado>Busque por tags:</H3Estilizado>
                {tags.map(tag => <TagEstilizada key={tag.id}>{tag.titulo}</TagEstilizada>)}
            </FlexContainer>
        </>
    )
}

export default Tags;
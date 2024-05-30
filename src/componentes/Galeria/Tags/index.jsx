import styled from 'styled-components';

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
    border: ${ props => props.$tagId === props.$selecionada ? '3px solid #C98CF1' : 'none' };
    background-color: #d9d9d960;
    color: white;
    border-radius: 10px;
    font-weight: 400;
    font-size: 24px;
    cursor: pointer;
`

const Tags = ({ tags = [], setTagSelecionada, tagSelecionada }) => {
    return (
        <>
            <FlexContainer>
                <H3Estilizado>Busque por tags:</H3Estilizado>
                {tags.map(tag => 
                    <TagEstilizada
                        key={tag.id}
                        $tagId={tag.id}
                        $selecionada={tagSelecionada.id}
                        onClick={() => {
                            setTagSelecionada(tag)
                        }}
                    >
                        {tag.titulo}
                    </TagEstilizada>
                )}
            </FlexContainer>
        </>
    )
}

export default Tags;
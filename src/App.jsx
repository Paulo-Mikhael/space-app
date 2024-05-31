import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import tags from "./tags.json"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1300px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [tagsDaGaleria, setTagsDaGaleria] = useState(tags);
  const [tagSelecionada, setTagSelecionada] = useState(tags[0]);
  const [pesquisa, setPesquisa] = useState('');

  let fotosFiltradas = fotos;

  useEffect(() => {
    fotosFiltradas = fotos.filter(foto => foto.tagId === tagSelecionada.id);

    if (pesquisa !== ''){
      filtrarTexto();
    }
    
    if (tagSelecionada !== tags[0] || pesquisa !== ''){
      setFotosDaGaleria(fotosFiltradas);
    }else{
      setFotosDaGaleria(fotos);
    }
  }, [tagSelecionada]);

  useEffect(() => {
    filtrarTexto();
  }, [pesquisa]);

  function filtrarTexto(){
    fotosFiltradas = fotos.filter(foto => foto.tagId === tagSelecionada.id);

    if (tagSelecionada === tags[0]){
      fotosFiltradas = fotos.filter(foto => foto.titulo.toLowerCase().includes(pesquisa.toLowerCase()));
    }else{
      fotosFiltradas = fotosFiltradas.filter(foto => foto.titulo.toLowerCase().includes(pesquisa.toLowerCase()));
    }

    setFotosDaGaleria(fotosFiltradas);
  }

  let favoritos = [];

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !fotoDaGaleria.favorita : fotoDaGaleria.favorita
      }
    }));
  }

  function mudaValor(event){
    setPesquisa(event.target.value);
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho pesquisa={pesquisa} mudaValor={mudaValor}/>
          <MainContainer>
            <BarraLateral />
            <ConteudoGaleria>
              <Banner texto='A galeria mais completa de fotos do espaço!'/>
              <Galeria 
                aoFotoSelecionada={setFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                fotos={fotosDaGaleria}
                tags={tagsDaGaleria}
                setTagSelecionada={setTagSelecionada}
                tagSelecionada={tagSelecionada}
              />
            </ConteudoGaleria>
          </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => {setFotoSelecionada(null)}}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App

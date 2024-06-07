import styled from "styled-components";
import EstilosGlobais from "./Components/EstilosGlobais";
import Cabecalho from "./Components/Cabecalho";
import BarraLateral from "./Components/BarraLateral";
import Banner from "./Components/Banner";
import banner from "../public/banner/banner.png";
import Galeria from "./Components/Galeria";
import fotos from './fotos.json';
import { useEffect, useState } from "react";
import ModalZoom from "./Components/ModalZoom";
import Rodape from "./Components/Rodape";
import BotaoVoltarInicio from "./Components/BotaoVoltarInicio";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #333333 4.16%, #4C4C4C 48%, #4c3d38 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1500px;
  min-width: 1500px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  justify-content: end;
  margin-left: 4rem;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`;

const Mensagem = styled.div`
  text-align: center;
  color: #a39e9e;
  font-size: 32px;
  margin-top: 30px;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const fecharModal = () => {
    setFotoSelecionada(null);
  };

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      if (fotoDaGaleria.id === foto.id) {
        return { ...fotoDaGaleria, favorita: !fotoDaGaleria.favorita };
      }
      return fotoDaGaleria;
    }));
  };

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = tag === 0 || foto.tagId === tag.toString(); 
      const filtroPorTitulo = filtro === '' || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitulo;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag]);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho filtro={filtro} setFiltro={setFiltro} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria de moda mais completa para você!"
              backgroundImage={banner} />
            {fotosDaGaleria.length > 0 ? (
              <Galeria
                aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                fotos={fotosDaGaleria}
                aoAlternarFavorito={aoAlternarFavorito}
                setTag={setTag}
              />
            ) : (
              <Mensagem>Ops! Nenhum resultado encontrado :(</Mensagem>
            )}
            <BotaoVoltarInicio />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={fecharModal} aoAlternarFavorito={aoAlternarFavorito} />
      <Rodape />
    </FundoGradiente>
  );
};

export default App;

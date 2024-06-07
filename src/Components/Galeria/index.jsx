import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./imagem";
import { useState } from "react";

const GaleriaContainer = styled.div`
  width: 100%;
`;

const SecaoFluida = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const ImagensContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;



const Botao = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #AF6A65;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 18%;
  margin-top: 25px;
  transition: 0.3s ease;
  &:hover {
    background-color: #AF6A65;
  }
`;

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const toggleMostrarFotos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const fotosExibidas = mostrarTodos ? fotos : fotos.slice(0, 6);
  const mostrarBotao = fotos.length >= 6; 

  return (
    <>
      <Tags setTag={setTag} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotosExibidas.map(foto => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainer>
          {mostrarBotao && (
            <Botao onClick={toggleMostrarFotos}>
              {mostrarTodos ? 'Ver menos' : 'Ver mais'}
            </Botao>
          )}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;

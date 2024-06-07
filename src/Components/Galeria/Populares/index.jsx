import React, { useState } from 'react';
import styled from 'styled-components';
import Titulo from '../../Titulo';
import fotos from '../../../fotos.json';

const ColunaFotos = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
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
const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Populares = () => {
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const toggleMostrarFotos = () => {
        setMostrarTodos(!mostrarTodos);
    };

    const fotosExibidas = mostrarTodos ? fotos : fotos.slice(0, 6);

    return (
        <section>
            <Titulo $alinhamento="left">Populares</Titulo>
            <DivEstilizada>
            <ColunaFotos>
                {fotosExibidas.map(foto => (
                    <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
                ))}
            </ColunaFotos>
            <Botao onClick={toggleMostrarFotos}>
                {mostrarTodos ? 'Ver menos' : 'Ver mais'}
            </Botao>
            </DivEstilizada>
        </section>
    );
};

export default Populares;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Titulo from '../../Titulo';
import fotos from '../../../fotos.json';

const ColunaFotos = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    @media(max-width: 768px){
        justify-content: center;
    }
    @media(min-width: 768px) and (max-width: 900px){
        justify-content: center;
        gap: 2rem;
    }

`;

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
    @media(max-width: 767px){
        max-width: 150px;
    }
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
  @media(max-width: 767px){
    font-size: 16px;
    width: 40%;
    
  }
  @media(min-width: 768px) and (max-width: 900px){
    width: 30%;
    margin: 1.5rem auto;
  }
`;
const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Populares = () => {
    const [mostrarTodos, setMostrarTodos] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMostrarFotos = () => {
        setMostrarTodos(!mostrarTodos);
    };

    const getFotosExibidas = () => {
        if (windowWidth < 1440 && windowWidth >= 1280) {
            return mostrarTodos ? fotos : fotos.slice(0, 4);
        }
        return mostrarTodos ? fotos : fotos.slice(0, 6);
    };

    const fotosExibidas = getFotosExibidas();

    return (
        <section>
            <Titulo>Populares</Titulo>
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

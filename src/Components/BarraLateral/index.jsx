import React, { useState } from 'react';
import styled from 'styled-components';
import ItemNavegacao from './ItemNavegacao';
import logo from '../../imagens/logo.png';

const AsideEstilizada = styled.aside`
  width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  @media (max-width: 768px) {
    background-color: #2e2626;
    width: 60%;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
  @media( min-width: 768px) and (max-width: 900px){
    background-color: #2e2626;
    width: 40%;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};

  }
`;

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 90%;
`;

const LogoEstilizada = styled.img`
  max-width: 80%;
  @media(max-width: 900px){
    max-width: 60%;
    margin-top: 3rem;
    margin-left: -1rem;
  }

`;

const MenuButton = styled.button`
  position: fixed;
  top: 1.5rem;
  left: 1rem;
  background: none;
  border: none;
  color: #AF6A65;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;
  @media (min-width: 900px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
  @media (min-width: 769px) {
    display: none;
  }
`;

const BarraLateral = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleSidebar}>&#9776;</MenuButton>
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
      <AsideEstilizada isOpen={isOpen}>
        <a href="/">
          <LogoEstilizada src={logo} alt="logo laMode" />
        </a>
        <nav>
          <ListaEstilizada>
            <ItemNavegacao
              iconeAtivo="/icones/home-ativo.png"
              iconeInativo="/icones/home-inativo.png"
              ativo={true}
            >
              Início
            </ItemNavegacao>
            <ItemNavegacao
              iconeAtivo="/icones/maisvistos-ativo.png"
              iconeInativo="/icones/maisvistos-inativo.png"
              ativo={false}
            >
              Mais vistos
            </ItemNavegacao>
            <ItemNavegacao
              iconeAtivo="/icones/maisvendidos-ativo.png"
              iconeInativo="/icones/maisvendidos-inativo.png"
              ativo={false}
            >
              Mais vendidos
            </ItemNavegacao>
            <ItemNavegacao
              iconeAtivo="/icones/novidades-ativo.png"
              iconeInativo="/icones/novidades-inativo.png"
              ativo={false}
            >
              Novidades
            </ItemNavegacao>
            <ItemNavegacao
              iconeAtivo="/icones/surpreendame-ativo.png"
              iconeInativo="/icones/surpreendame-inativo.png"
              ativo={false}
            >
              Para você
            </ItemNavegacao>
          </ListaEstilizada>
        </nav>
      </AsideEstilizada>
    </>
  );
};

export default BarraLateral;

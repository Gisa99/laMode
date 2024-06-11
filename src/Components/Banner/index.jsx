import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import banner2 from '../../../public/banner/banner2.png';

const FigureEstilizada = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  margin: 0;
  min-height: 370px;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
  background-position: top center;
  @media(max-width: 768px) {
    border-radius: 0;
    max-height: 350px;
  }
  @media(min-width: 768px) and (max-width: 900px){
    max-height: 500px;
    height: 500px;
    border-radius: 0;

  }
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFF0;
  max-width: 30%;
  padding: 0 64px;
  @media(max-width: 767px){
    align-self: end;
    line-height: 35px;
    font-size: 2rem;
    max-width: 80%;
    margin-left: -2rem; 
  }
`;

const Banner = ({ texto, backgroundImage }) => {
  const [currentBackground, setCurrentBackground] = useState(backgroundImage);

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setCurrentBackground(banner2);
    } else {
      setCurrentBackground(backgroundImage);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial background based on current window size
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [backgroundImage]);

  return (
    <FigureEstilizada $backgroundImage={currentBackground}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;

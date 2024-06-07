import { useState, useEffect } from "react";
import styled from "styled-components";
import arrowTop from '../../../public/icones/arrow-top.png'

const BotaoEstilizado = styled.button.attrs(props => ({
    style: {
      display: props.visible ? 'block' : 'none'
    }
  }))`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 16px;
    background-color: #AF6A65;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity 0.3s;
  
    &:hover {
      background-color: #995651;
    }
  `

const BotaoVoltarInicio = () => {
    const[visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

    return(
        <BotaoEstilizado onClick={scrollToTop} visible={visible}><img src={arrowTop} alt="ícone voltar ao início" /></BotaoEstilizado>

    )
}

export default BotaoVoltarInicio
import styled from "styled-components";

const Titulo = styled.h2`
    color: #AF6A65;
    font-size: 32px;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : "left"};
    @media(max-width: 767px){
        font-size: 28px;
        text-align: ${props => props.$alinhamento ? props.$alinhamento : "center"};
    }
    @media(min-width: 767px) and (max-width: 900px){
        padding-left: 1rem;
    }
    

`

export default Titulo
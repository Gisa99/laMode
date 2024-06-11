import styled from "styled-components";


const HeaderEstilizado = styled.header`
    padding:  0;
    margin: 1rem 1rem 1rem 0;
    display: flex;
    justify-content:end;
    align-items: center;
`;

const CampoTexto = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #AF6A65;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    @media (max-width: 768px){
        width: 75%;
        font-size: 16px;
        margin: 1rem;
    }
        
`;

const Cabecalho = ({ setFiltro,filtro }) => {
    return (
        <HeaderEstilizado>
            <CampoTexto 
                placeholder="O que você procura?" 
                value={filtro}
                onChange={(evento) => setFiltro(evento.target.value)}
            />
        </HeaderEstilizado>
    );
};

export default Cabecalho;

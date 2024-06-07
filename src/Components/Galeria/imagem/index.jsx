import { styled } from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    min-height: 500px;
    max-height: 500px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinha itens ao centro */
    justify-content: center; /* Centraliza itens verticalmente */
    & > img {
        width: 100%;
        height: 450px;  /* Defina a altura fixa desejada para a imagem */
        object-fit: cover;  /* Garante que a imagem preencha o contêiner */
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #AF6A65;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        width: 100%; /* Garante que o figcaption ocupe a largura total */
        h3 {
            font-family: 'PoppinsRegular';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>{foto.fonte}</h4>
                    <BotaoIcone onClick={ ()=> aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="Icone de favorito" />
                    </BotaoIcone>
                    {!expandida && 
                        <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="Icone de expandir" />
                        </BotaoIcone>
                    }
                </Rodape>
            </figcaption>
        </Figure>
    );
}

export default Imagem;

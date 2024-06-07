import styled from "styled-components"
import Imagem from "../Galeria/imagem"
import fechar from "../../../public/icones/fechar.png"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 1000px;
  
    background: transparent;
    padding: 0;
    border: 0;
    height: 600px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: -16px;
            right: 119px;
            border: 2px solid #AF6A65;
            border-radius: 20px;
            padding-top: .3rem;
            cursor: pointer;
            img{
                height: 25px;
                margin: 0 auto;
            }
        }
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito}) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado open={!!foto}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    <p>Exemplo do Mozilla</p>
                    <form method="dialog">
                        <button onClick={aoFechar} type="submit"><img src={fechar} alt="ícone para fechar pop-up"/></button>
                    </form>
                </DialogEstilizado>
                </>}

        </>
    )
}

export default ModalZoom
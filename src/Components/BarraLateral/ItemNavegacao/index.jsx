import styled from "styled-components"


const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#AF6A65' : '#81716b'};
    font-family: ${ props => props.$ativo ? 'PoppinsBold' : 'PoppinsRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
    transition: .3s ease;
    &:hover{
        color: #AF6A65;
    }
    img{
        max-height: 35px;
        @media(max-width: 768px){
            max-height: 25px;
        }
    }
    @media(max-width: 768px){
        font-size: 18px;
    }
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo=false}) =>{
    return(
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao
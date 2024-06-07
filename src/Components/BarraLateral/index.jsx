import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"
import logo from "../../imagens/logo.png";

const AsideEstilizada = styled.aside`
  width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
`

const ListaEstilizada = styled.ul`
    list-style: none;
    padding:0;
    margin: 0;
    width: 90%;
    
`
const LogoEstilizada = styled.img`
  max-width: 80%;
`

const BarraLateral = () => {
    return(
        <AsideEstilizada>
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
                  </ItemNavegacao >
                  <ItemNavegacao
                   iconeAtivo="/icones/maisvistos-ativo.png"
                   iconeInativo="/icones/maisvistos-inativo.png"
                   ativo={false}
                  >
                    Mais vistos
                  </ItemNavegacao >
                  <ItemNavegacao
                   iconeAtivo="/icones/maisvendidos-ativo.png"
                   iconeInativo="/icones/maisvendidos-inativo.png"
                   ativo={false}
                  >
                    Mais vendidos
                  </ItemNavegacao >
                  <ItemNavegacao
                   iconeAtivo="/icones/novidades-ativo.png"
                   iconeInativo="/icones/novidades-inativo.png"
                   ativo={false}
                  >
                    Novidades
                  </ItemNavegacao >
                  <ItemNavegacao
                   iconeAtivo="/icones/surpreendame-ativo.png"
                   iconeInativo="/icones/surpreendame-inativo.png"
                   ativo={false}
                  >
                    Para você
                  </ItemNavegacao >
                </ListaEstilizada>
            </nav>
        </AsideEstilizada>
    )
}

export default BarraLateral
import styled from "styled-components"
import github from '../../../public/icones/github.png'
import linkedin from '../../../public/icones/linkedin.png'
import portfolio from '../../../public/icones/portfolio.png'


const RodapeEstilizado =  styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 2rem;
    text-align: center;
    color: #FFFFF0;
`
const Contato = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    a{
        img{
        height: 32px;
        transition: transform 0.3s ease;
        &:hover{
            transform: scale(1.2);
        }
    }
    }  
`
const Rodape = () =>{
    return(
        <RodapeEstilizado>
             &copy; {new Date().getFullYear()} LaMode Moda e Confecções LTDA. Todos os direitos reservados.
             <Contato>
                <a href="https://github.com/Gisa99" target="_blank"><img src={github} alt="ícone github"/></a>
                <a href="https://www.linkedin.com/in/giselefranca-devfrontend/" target="_blank"><img src={linkedin} alt="ícone linkedin"/></a>
                {/*<a href="https://portfolio-nine-gules-70.vercel.app/" target="_blank"><img src={portfolio} alt="ícone Portfólio"/></a>*/}
             </Contato>

        </RodapeEstilizado>
    )
}

export default Rodape
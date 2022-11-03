import  logotipo from "../../../public/img/pontologowhite.png" 
import  john from "../../../public/img/john.png" 
import { ButtonLayout, HeaderContainer, LineStyles, LineStylesDupla, ListMenu, LogoContainer, UserContainer } from "./Headerstyles"
import Select from 'react-select'
import { useContext } from "react"
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart"
import { Alarm, Buildings, CaretDown, MagnifyingGlassPlus, UserCircle } from "phosphor-react"
import { Link } from "react-router-dom"


export function Header() {
  const {cartItem} = useContext(AddToCartContex)

 




 return (
  <HeaderContainer>
    <LogoContainer>
        <img src={logotipo} alt="" />
        <LineStyles></LineStyles>
        <UserContainer>
          <img src= {john}alt="" />
          <div>
            <span id="">Jonathan Souza</span>
            <CaretDown/>
          </div>

        </UserContainer>
        <ButtonLayout><Alarm/><Link to="AddPoint"><a href="">REGISTRAR PONTO</a></Link></ButtonLayout>
        <LineStylesDupla></LineStylesDupla>
    </LogoContainer>

      <ListMenu>
        <div>
            <Buildings size={16} color="white"/><Link to = "Empresa"><a href=""><span>Cadastrar Empresa</span></a></Link>
        </div>
        <div>
            <UserCircle size={16} color="white"/><Link to = "Funcionario"><a href=""><span>Cadastrar Funcionário</span></a></Link>
        </div>
        <div>
        <MagnifyingGlassPlus size={16} color="white" /><Link to = "Point"><a href=""><span>Buscar Pontos</span></a></Link>
        </div>
          </ListMenu>

  </HeaderContainer>
 ) 
}
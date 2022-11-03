import styled from 'styled-components'


export const HeaderContainer = styled.header`
  position:fixed;
  height: 100%;
  width: 15.5rem;
  background: ${(props) => props.theme['blue-100']};
  border-radius: 2px;  
  
  
`


export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -35px;
  margin-left: 10px;


img { 
  width: 100%;
  margin-top: 10px;
}

img::after {
  content:  '';
  height: 1px;
  width: 13rem;
  background-color: ${(props) => props.theme['white']};
  margin-left: 5px;
  margin-top:-40px;
}



a{
  text-decoration: none;
  padding: 4px;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 5px;
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Courier New', Courier, monospace;
}



span{
  font-family:  'Roboto', sans-serif;
  font-weight: 400;
}

`

export const LineStyles = styled.div`
  height: 1px;
  width: 13rem;
  position: absolute;
  background-color: ${(props) => props.theme['white']};
  margin-left: 5px;
  margin-top:-40px;
  opacity: 0.3;
` 
export const LineStylesDupla = styled.div`
  height: 1px;
  width: 13rem;
  position: absolute;
  background-color: ${(props) => props.theme['white']};
  margin-left: 5px;
  margin-top: 300px;
  opacity: 0.3;


` 
export const UserContainer = styled.div`
  display:  flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme['white']};
  margin-right: 25px;
  div{ 
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

 img{
  width:  2.5rem;
  height: 2.5rem;
  display: flex;
  margin-bottom: 1rem;
  border-radius: 50%;
  margin-left: 10px;
  border: solid 2px ${(props) => props.theme['green-500']};
  padding: 4px;
  background: ${(props) => props.theme['white']};
  
 }
`  

export const ButtonLayout = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
background:none;
height: 30px;
line-height: 30px;
gap: 5px;
padding: 20px;
width: 14rem;
cursor: pointer;
border-radius: 30px;
font-size: 13px;
border: 1px solid ${(props) => props.theme['white']}  ;
color: ${(props) => props.theme['white']};

&:hover{
background-color: ${(props) => props.theme['gray-500']};

}
a{
  background:none;
  color: ${(props) => props.theme['white']};

}
` 


export const ListMenu = styled.div`
display: flex;
flex-direction: column;
margin-top: 5rem;
gap: 3rem;

a{
  text-decoration: none;
  color:${(props) => props.theme['white']}  ;
  font-size: 15px;
}

a:hover{
  color:${(props) => props.theme['gray-300']}  ;
  
}

div{
  display:  flex;
  gap: 2rem;
  margin-left: 12px ;
  align-items: center;
}

` 


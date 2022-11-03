import styled from 'styled-components'


export const HomeContainer = styled.div `
  display: flex;
  max-width: 100%;
  margin-left: 15.4rem;
  padding: 1rem;
  flex-direction: column;
  height: 100vw; 
  gap: 2rem;  
  background: ${(props) => props.theme['gray-06']};



`


export const CadEmpresaHeader = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  gap: 2rem;  
  background: ${(props) => props.theme['gray-100']};

  color: blue;

`
export const CadEmpresaContainer = styled.div `
  display: flex;
  flex-direction: row;
  max-width: 50%;
  padding: 1rem;
  align-items: center;
  margin-left: 260px;
  border-radius: 10px;
  gap: 2rem;  
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-800']};

  form{
    width: 100%;
    display: flex;
    flex-direction: column;

  }
`

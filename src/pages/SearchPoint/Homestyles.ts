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
  padding: 1rem;
  border-radius: 10px;
  gap: 2rem;  
  background: ${(props) => props.theme['gray-100']};

  color: blue;




`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    background-color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['gray-800']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-100']};
    border-top: 4px solid ${(props) => props.theme['gray-800']};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`
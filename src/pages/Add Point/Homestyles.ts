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


// export const InfoContainer = styled.main `
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
//   margin-left: 5rem;
//   margin-top: 2rem;


//   h1{
//   color: ${(props) => props.theme['black-10']};
//   font-family: 'Baloo 2';
//   font-style: normal;
//   font-weight: 800;
//   font-size: 48px;
//   line-height: 130%;
//   margin-bottom: 1rem;
 
//   }

//   span {
//     font-weight: 400;
//     font-size: 20px;
//   }
// `

// export type VariantesColor = 'primary' | 'secundary';

// interface InfoContainerProps {
//   variant: VariantesColor;
// }

// const cardVariantes = { 
//   primary: 'red',
//   secundary: 'blue'
// }

// export const Infortext = styled.main`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     color: ${(props) => props.theme['gray-1000']};
//     height: 6rem;
//     width: max-content;
    

// span {
// display: flex;
// gap: 1rem;
// margin-top: 1rem;
// align-items: center;
// justify-content: start;
// font-family: Verdana, Geneva, Tahoma, sans-serif;
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 130%;
// color: ${(props) => props.theme['gray-600']};

// }

//   a{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${(props) => props.theme['white']};
//   padding: 7px;
//   border-radius: 50%;
//   text-decoration: none;
//   background: ${(props) => props.theme['black-10']};
// }

// `

// export const MeunCoffee = styled.div`
// margin-top: 16rem;
// margin-left: 8rem;

// h1{
//   color: ${(props) => props.theme['gray-600']};
//   font-family: 'Baloo 2';
//   font-style: normal;
//   font-weight: 800;
//   font-size: 32px;
//   line-height: 130%;
// }

// `
// export const ListCoffeeContainer = styled.div`

// width: 95%;
// height: 30rem;
// padding: 1rem;
// display: flex;
// gap: 2rem;
// margin-top: 6rem;
// flex-wrap: wrap;
// `

// export const CardCoffeDiv = styled.div` 
// /* display: flex;
// gap: 10rem;
// flex-wrap: wrap;
// flex-direction: column; */

// `


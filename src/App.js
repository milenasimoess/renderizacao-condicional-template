import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(1)
  const mudarTela = () => setTela(2)


 
  switch(tela){
   case 1:
     return (
     <MainContainer >
       <GlobalStyled />
       <TelaLogin mudarTela={()=>setTela(2)} />
     </MainContainer>
   );

 case 2 :
   return(
  <MainContainer >
   <GlobalStyled />
   <TelaCadastro mudarTela={()=>setTela(1)}/>
 </MainContainer>);

 default : 
 return (
   <MainContainer >
  <GlobalStyled />
  <h1>Algo deu errado</h1>
   <TelaLogin />
 </MainContainer>
 );
  
 }}

// return(
//   <MainContainer >
//   <GlobalStyled />
//   {/* condição ? true : false */}
//   {/* { tela === 1 ? <TelaLogin/> : <TelaCadastro/>} */}
//   {/* curto circuito */}
//   {/* {(tela && <TelaLogin/>) || <TelaCadastro/>} */}
//   {/* se tela não for um valor falso dentro da coersão, então ele retorna o segundo valor */}
// </MainContainer>
// )


export default App;
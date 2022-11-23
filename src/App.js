import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

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

  const trocarDeTela = (tela) => {
    setTela(tela)
  };
  // 1 => tela de login
  // 2 => cadastro

  if (tela === 1) {
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaLogin trocarDeTela={trocarDeTela}/>
      </MainContainer>
    );
  }

  if (tela === 2) {
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaCadastro trocarDeTela={trocarDeTela}/>
      </MainContainer>
    );
  }

  if (tela === 3) {
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaUsuarioCadastrado trocarDeTela={trocarDeTela}/>
      </MainContainer>
    );
  }

}
export default App;




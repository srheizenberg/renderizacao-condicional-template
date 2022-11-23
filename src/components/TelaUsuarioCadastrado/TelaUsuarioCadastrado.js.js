import { Div, Titulo, BackToLoginButton } from "./styled";

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BackToLoginButton onClick={() => props.trocarDeTela(1)}>Volta Ao Início</BackToLoginButton>
        </Div>
    )
}

export default TelaUsuarioCadastrado;
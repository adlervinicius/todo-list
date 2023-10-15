import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

//styles
import {
    Container,
    InputEmail,
    InputPassword,
    TextHeader,
    ButtonLogin,
    ContainerAreaLogin,
    DivButton,
} from './loginStyles';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const isLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/login');
            } else {
                alert("Não deu certo.");
            }
        }
    }

    //function login no botao
    const handleLogin = async () => {
        isLogin();
    }

    //main
    return (
        <Container>
            <ContainerAreaLogin>
                <DivButton>
                    <TextHeader>LOGIN</TextHeader>
                </DivButton>
                <InputEmail
                    type="text"
                    value={email}
                    onChange={handleEmailInput}
                    placeholder="Digite seu e-mail"
                />
                <InputPassword
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                    placeholder="Digite sua senha"
                />
                <DivButton>
                    <ButtonLogin onClick={handleLogin}>Logar</ButtonLogin>
                </DivButton>
            </ContainerAreaLogin>
            
        </Container>
    );
}
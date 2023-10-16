//styles
import { 
    ContainerArea,
    ContainerCreateAccount,
    DivHeader,
    TextHeader,
    InputPasswordRept,
    InputEmail,
    InputPassword,
    InputName,
    ButtonLogin,
    DivButton,
} from './CreateAccount';

//main
export const CreateAccountPage = () => {
    return (
        <ContainerArea>
            <ContainerCreateAccount>
                <DivHeader>
                    <TextHeader>CRIAR CONTA</TextHeader>
                </DivHeader>
                <InputName
                    type="text"
                    // value={name}
                    // onChange={handleEmailInput}
                    placeholder="Digite seu nome"
                />
                <InputEmail
                    type="text"
                    // value={email}
                    // onChange={handleEmailInput}
                    placeholder="Digite seu e-mail"
                />
                <InputPassword
                    type="password"
                    // value={password}
                    // onChange={handlePasswordInput}
                    placeholder="Digite sua senha"
                />
                <InputPasswordRept
                    type="password"
                    // value={passwordRept}
                    // onChange={handlePasswordInput}
                    placeholder="Repita sua senha"
                />
            </ContainerCreateAccount>
            <DivButton>
                <ButtonLogin>Criar</ButtonLogin>
            </DivButton>
        </ContainerArea>
    )
}

export default CreateAccountPage;
import {
    Container, 
    TextHome,
    TextLogin,
} from './styles';

export const Home = () => {
    return(
        <Container>
            <TextHome>Bem-vindo a sua lista de tarefas</TextHome>
            <TextLogin>Faça o login para começar.</TextLogin>
        </Container>
    );
}

export default Home;
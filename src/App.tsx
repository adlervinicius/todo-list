import { useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './Pages/Home/';
import { Private } from './Pages/TodoList';

//styles
import { 
    Container,
    Area, 
    Header,
    Navegation,
    ButtonLogout,
} from './App.styles';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

// main
function App() {

  const auth = useContext(AuthContext);

  //refash page
  // const refrashItem = () => {
  //   window.location.href = window.location.href;
  // }

  const handleLogout = () => {
    auth.signout();
    // refrashItem();
  }

  return (
    <Container>
      <Area>
        <Header>
          <Navegation>
            {!auth.user ? <Link to="/">Home</Link> : ''}
            <Link to="/login">
              {auth.user ? 'Lista de Tarefas' : 'Login'}
            </Link>
            {auth.user && <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>}
          </Navegation>
        </Header>
      </Area>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </Container>
  );
}

export default App;
import { useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './Pages/Home/';
import { Login } from './Pages/Login/login';
import { Private } from './Pages/TodoList';

//styles
import { 
    Container,
    Area, 
    Header,
    Navegation,
} from './App.styles';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

// main
function App() {

  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <Container>
      <Area>
        <Header>
          <Navegation>
            <Link to="/">Home</Link>
            <Link to="/login">Lista de Tarefas</Link>
            {auth.user && <button onClick={handleLogout}>Sair</button>}
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
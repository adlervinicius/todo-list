import { useState, useContext } from 'react';
import { Item } from '../../types/item';

//styles
import { 
    Container,
    Area, 
    Header,
} from './styles';

//importando os componentes
import { AddArea } from '../../components/AddArea';
import { ListItem } from '../../components/ListItem';
import { AuthContext } from '../../contexts/Auth/AuthContext';


// main
export const Private = () => {
  const auth = useContext(AuthContext)
  const [list, setList] = useState<Item[]>([]);

  //function add new item list
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  //main
  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        <h3>Olá {auth.user?.name}, comece agora sua lista de tarefas!</h3>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  );
}

export default Private;
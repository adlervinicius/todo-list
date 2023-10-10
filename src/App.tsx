import { useState } from 'react';
import { Item } from './types/item';

//styles
import { 
    Container,
    Area, 
    Header,
} from './App.styles';

//importando os componentes
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';


// main
const App = () => {

  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>
          Lista de Tarefas
        </Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  );
}

export default App;
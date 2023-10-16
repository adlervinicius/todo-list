import { useState } from 'react';
import { 
    Container, 
    TextLabel, 
    ButtomDelete,
    ContainerArea,
    InputCheck,
} from './styles';

//style
import { Item } from '../../types/item';

//types
type Props = {
    item: Item;
    handleRemoveItem: any;
}

export const ListItem = ({ item, handleRemoveItem }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <ContainerArea>
            <Container>
                <text>{item.id}.</text>
                <InputCheck
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                />
                <TextLabel done={isChecked}>{item.name}</TextLabel>
            </Container>
            <ButtomDelete onClick={e => handleRemoveItem()}>Excluir</ButtomDelete>
        </ContainerArea>
        
    );
}
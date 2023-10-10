import { useState } from 'react';
import { Container, TextLabel } from './styles';

//style
import { Item } from '../../types/item';

//types
type Props = {
    item: Item;
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)
    
    return (
        <Container>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <TextLabel done={isChecked}>{item.name}</TextLabel>
        </Container>
    );
}
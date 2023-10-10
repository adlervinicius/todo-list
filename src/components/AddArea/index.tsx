import { useState, KeyboardEvent } from 'react';
import { Comtainer, AreaAdd, InputArea } from './styles';

//types
type Props = {
    onEnter: (taskName: string) => void;
}

//main
export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <Comtainer>
            <AreaAdd>➕</AreaAdd>
            <InputArea 
                type="text" 
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e=> setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Comtainer>
    )
}
import styled from 'styled-components';

type ContainerProps = {
    done?: boolean;
};

export const Container = styled.div`
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
`;

export const TextLabel = styled.label<ContainerProps>`
    color: ${done => done.done ? 'green' : '#ccc' };
    text-decoration: ${done => done.done ? 'line-through' : 'initial' };
`;
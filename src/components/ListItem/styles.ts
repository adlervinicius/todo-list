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
    min-width: 56vw;

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

export const ContainerArea = styled.div`
    display: inline-flex;
`;

export const ButtomDelete = styled.button`
    border-radius: 10px;
    background-color: #273746;
    font-size: 14px;
    color: #F2D7D5;
    height: 45px;
    margin: 0px 0px 0px 20px;
    cursor: pointer;
    border: none;
`;

export const InputCheck = styled.input``;
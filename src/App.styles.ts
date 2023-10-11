import styled from 'styled-components';

export const Container = styled.div`
    background-color: #17181f;
    color: #797a81;
    min-height: 1000vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
    font-size: 16px;
`;

export const Navegation = styled.nav`
    // display: grid;

    a {
        color: white;
        text-decoration: none;
        display: center;
        margin: 0px 5px 0px 5px;
    }

    :hover {
        text-decoration: none;
        color: #ccc;
    }
`;
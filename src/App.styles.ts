import styled from 'styled-components';

export const Container = styled.div`
    background-color: #17181f;
    color: #797a81;
    min-height: 100vh;
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
        margin: 0px 50px 0px 5px;
    }

    :hover {
        text-decoration: none;
        color: #ccc;
    }
`;

export const ButtonLogout = styled.button`
    padding: 5px;
    border-radius: 5px;
    background-color: #273746;
    font-size: 14px;
    color: #F2D7D5;
`;
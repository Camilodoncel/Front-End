import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #262626;
    color: #D9D9D9;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const ButtonPlus = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: #737373;
    color: #D9D9D9;
    font-size: 1.5rem;
    :hover{
        background-color: #404040;
        color: #D9D9D9;
    }
    :focus{
        outline: none;
    }
    margin-left: -20px;
`;

export const ButtonMinus = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: #737373;
    color: #D9D9D9;
    font-size: 1.5rem;
    :hover{
        background-color: #404040;
        color: #D9D9D9;
    }
    :focus{
        outline: none;
    }
    margin-right: -20px;
    z-index:1;
`;

export const CountWrapper = styled.div`
    background-color: white;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #262626;
`;


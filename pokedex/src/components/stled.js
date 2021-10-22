import styled from "styled-components";

export const Cardpokemon = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: solid black 1px;
padding: 10px;
border-radius: 5px;
box-shadow: black;
div{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 100%;
    }
}
`
export const Botao1 = styled.button`
    width: 90px;
    height: 40px;
    margin-right: 8px;
    background-color: blue;
    border: none;
    border-radius: 6px;
    color: white;
    :hover{
        background-color: lightblue;
        cursor: pointer;
    }
`
export const Botao2 = styled.button`
    width: 90px;
    height: 40px;
    margin-left: 8px;
    background-color: blue;
    border: none;
    border-radius: 6px;
    color: white;
    :hover{
        background-color: lightblue;
        cursor: pointer;
    }
`
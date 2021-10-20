import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
 
const ConteinerHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 20px;
align-items: center;
background-color: brown;
button{
    background-color: blue;
    border: none;
    border-radius: 6px;
    padding: 10px;
    color: white;
    :hover{
        background-color: lightblue;
        cursor: pointer;
    }
}
`
const Header = (props) => {
 

    return (
        <ConteinerHeader>
            <h1>Pokemon Show</h1>
            <button onClick={() => props.mudarPagina()}>{props.nome}</button>
        </ConteinerHeader>
    )
}
export default Header
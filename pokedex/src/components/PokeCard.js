import React from "react";
import styled from "styled-components";

const Cardpokemon = styled.div`
border: solid black 1px;
padding: 10px;
border-radius: 5px;
box-shadow: black;
div{
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const Botao1 = styled.button`
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
const Botao2 = styled.button`
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

const PokeCard = (props) => {

    return (
        <Cardpokemon>
            <img src="https://picsum.photos/200/200" alt="pokemon"></img>
            <h2>nome do pokemon</h2>
            <div>
                <Botao1 onClick={() => { props.irParaDetalhes() }}>Detalhes</Botao1>
                <Botao2>Adicionar na Pokedéx</Botao2>
            </div>
        </Cardpokemon>
    )
}
export default PokeCard
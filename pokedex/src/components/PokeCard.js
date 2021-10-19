import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Cardpokemon = styled.div`
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
    const [imagemPokemon, setImagemPokemon] = useState()

    axios.get(`${props.url}`)
        .then((res) => {
            console.log(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
            setImagemPokemon(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
        })
    return (
        <Cardpokemon>
            <div>
                <img src={imagemPokemon} alt="pokemon"></img>
            </div>
            <span>
                <h2>{props.name}</h2>
                <div>
                    <Botao1 onClick={() => { props.irParaDetalhes() }}>Detalhes</Botao1>
                    <Botao2>Adicionar na Pokedéx</Botao2>
                </div>
            </span>
        </Cardpokemon>
    )
}
export default PokeCard
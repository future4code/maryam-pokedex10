import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import styled from "styled-components";
import axios from "axios";

const GridConteiner = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
column-gap: 60px;
padding: 40px;
row-gap: 30px;

`
const ConteinerHome = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const HomePage = (props) => {


    const history = useHistory()


  
    //  const listapokemon = props.dados && props.dados.map((pokemon)=>{
    //      return <PokeCard key={pokemon.name} name = {pokemon.name} url = {pokemon.url} irParaDetalhes = {irParaDetalhes} />
    //  })
     const irParaPokedex = () => {
        history.push("/pokedex")
    }
    
    return (
        <div>
            <Header  mudarPagina = {irParaPokedex} nome = {"Ir Para Pokedex"}/>
            <ConteinerHome>
            <GridConteiner>
            {props.listapokemon}
            </GridConteiner>
            </ConteinerHome>
            <h1>Home</h1>
            <button onClick={irParaPokedex}>Pokedex</button>
            <button onClick={props.irParaDetalhes}>Detalhes</button>
        </div>
    )
}
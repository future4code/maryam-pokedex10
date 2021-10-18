import React from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import styled from "styled-components";

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

export const HomePage = () => {

    const history = useHistory()

    const irParaPokedex = () => {
        history.push("/pokedex")
    }

    const irParaDetalhes = () => {
        history.push("/detalhe")
    }
    
    
    return (
        <div>
            <Header />
            <ConteinerHome>
            <GridConteiner>
            <PokeCard 
            irParaDetalhes = {irParaDetalhes} />
             <PokeCard 
            irParaDetalhes = {irParaDetalhes} />
             <PokeCard 
            irParaDetalhes = {irParaDetalhes} />
             <PokeCard 
            irParaDetalhes = {irParaDetalhes} />
             <PokeCard 
            irParaDetalhes = {irParaDetalhes} />
             <PokeCard 
            irParaDetalhes = {irParaDetalhes} />
             <PokeCard 
            irParaDetalhes = {irParaDetalhes} />
            </GridConteiner>
            </ConteinerHome>
            <h1>Home</h1>
            <button onClick={irParaPokedex}>Pokedex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>
        </div>
    )
}
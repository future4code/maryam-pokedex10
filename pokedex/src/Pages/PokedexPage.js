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
const ConteinerPokedex = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const PokedexPage = () => {

    const history = useHistory()

    const irParaHome = () => {
        history.goBack()
    }

    const irParaDetalhes = () => {
        history.push("/detalhe")
    }


    return (
        <div>
            <Header />
            <ConteinerPokedex>
                <GridConteiner>
                   
                </GridConteiner>
            </ConteinerPokedex>
            <h1>Pokedex</h1>
            <button onClick={irParaHome}>Voltar</button>
            <button onClick={irParaDetalhes}>Detalhes</button>
        </div>
    )
}
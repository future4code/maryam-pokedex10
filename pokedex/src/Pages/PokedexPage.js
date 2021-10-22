import React, { useContext } from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import styled from "styled-components";
import { goToHome } from "../router/Coordinator";
import { GlobalStateContext } from "../global/GlobalStateContext";

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
    const { pokedex } = useContext(GlobalStateContext)
    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const irParaDetalhes = () => {
        history.push("/detalhe")
    }



   

    return (
        <div>
            <Header mudarPagina={() => goToHome(history)} titulo = {"Ir Para Home"} />
            <ConteinerPokedex>
                <GridConteiner>
                   {pokedex && pokedex.map((pokemon)=>{
                       return <PokeCard isPokedex key={pokemon.id} name={pokemon.name} url={pokemon.url} />
                   })}
                </GridConteiner>
            </ConteinerPokedex>
        </div>
    )
}
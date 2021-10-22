import React, { useEffect, useContext } from "react";
import { GlobalStateContext } from "../global/GlobalStateContext"
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import {GridConteiner, ConteinerHome} from "../styled/HomeStyled";

export const HomePage = () => {

    const {states, setters, requests} = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getPokemons()
    }, [states, setters, requests])

    const pokemonsName = states.pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} name={pokemon.name} url={pokemon.url} />     
    })
        
    return (
        <div>
            <Header />
            <ConteinerHome>
            <GridConteiner>
            {pokemonsName}
            </GridConteiner>
            </ConteinerHome>
        </div>
    )
}
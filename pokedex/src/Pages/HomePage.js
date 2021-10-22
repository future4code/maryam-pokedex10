import React, { useEffect, useContext } from "react";
import { GlobalStateContext } from "../global/GlobalStateContext"
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import {GridConteiner, ConteinerHome} from "../styled/HomeStyled";

<<<<<<< HEAD
export const HomePage = () => {

    const {states, setters, requests} = useContext(GlobalStateContext)

    useEffect(() => {
        requests.getPokemons()
    }, [states, setters, requests])

    const pokemonsName = states.pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.id} name={pokemon.name} url={pokemon.url} />     
    })
        
=======
export const HomePage = (props) => {


    const history = useHistory()


  
   
     const irParaPokedex = () => {
        history.push("/pokedex")
    }
    
>>>>>>> master
    return (
        <div>
            <Header  mudarPagina = {irParaPokedex} nome = {"Ir Para Pokedex"}/>
            <ConteinerHome>
            <GridConteiner>
<<<<<<< HEAD
            {pokemonsName}
            </GridConteiner>
            </ConteinerHome>
=======
            {props.listapokemon}
            </GridConteiner>
            </ConteinerHome>
            <h1>Home</h1>
            <button onClick={irParaPokedex}>Pokedex</button>
            <button onClick={props.irParaDetalhes}>Detalhes</button>
>>>>>>> master
        </div>
    )
}
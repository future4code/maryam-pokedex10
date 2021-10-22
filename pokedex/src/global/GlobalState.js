import React, { useState } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const getPokemons = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      setPokemons(response.data.results)
    }).catch((error) => { 
      console.log(error)   
          
    })
  }

  const states = {pokemons, pokedex}
  const setters = {setPokemons, setPokedex}
  const requests = {getPokemons}

  return (
    <GlobalStateContext.Provider value = {{states, setters, requests}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import { HomePage } from "../Pages/HomePage";
import { PokedexPage } from "../Pages/PokedexPage";
import { DetailsPage } from "../Pages/DetailsPage/DetailsPage"
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Router = () => {
    const [dados, setDados] = useState([])
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((res)=>{
           setDados(res.data.results)
        }).catch((err)=>{
            window.alert(err)
        })
    }, [])



    const listapokemon = dados && dados.map((pokemon)=>{
        return <PokeCard key={pokemon.name} name = {pokemon.name} url = {pokemon.url} />
    })


    // axios.get(`${props.url}`)
    //     .then((res) => {
    //         console.log(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
    //         setImagemPokemon(res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
    //     }).catch((err)=> {
    //         window.alert(err.response)
    //     })


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage dados ={dados} listapokemon = {listapokemon}/>
                </Route>
                <Route exact path="/pokedex">
                    <PokedexPage />
                </Route>
                <Route exact path="/detalhe/:id" component = {DetailsPage}>
                   
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
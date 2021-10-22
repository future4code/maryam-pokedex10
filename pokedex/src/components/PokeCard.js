import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Cardpokemon, Botao1, Botao2 } from "./stled";
import { goToPokeDetails } from "../router/Coordinator";

const PokeCard = (props) => {
    
    const history = useHistory()
    
    const [imagemPokemon, setImagemPokemon] = useState()
    
    axios.get(props.url)
        .then((response) => {
            setImagemPokemon(response.data.sprites.versions['generation-v']['black-white'].animated.front_default)
        }).catch((error) => { 
            console.log(error)           
        })

    return (
        <Cardpokemon>
            <div>
                <img src={imagemPokemon} alt={props.name}/>
            </div>
            <h2>{props.name}</h2>
            <div>
                <Botao1>Adicionar</Botao1>
                <Botao2 onClick={() => goToPokeDetails(history, props.name)}>Detalhes</Botao2>
            </div>
        </Cardpokemon>
    )
}
export default PokeCard
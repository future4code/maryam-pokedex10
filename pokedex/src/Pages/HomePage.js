import React from "react";
import { useHistory } from "react-router";

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
            <h1>Home</h1>
            <button onClick={irParaPokedex}>Pokedex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>
        </div>
    )
}
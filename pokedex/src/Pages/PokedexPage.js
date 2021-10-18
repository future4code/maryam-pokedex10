import React from "react";
import { useHistory } from "react-router";

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
            <h1>Pokedex</h1>
            <button onClick={irParaHome}>Voltar</button>
            <button onClick={irParaDetalhes}>Detalhes</button>
        </div>
    )
}
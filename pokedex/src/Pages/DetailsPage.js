import React from "react";
import { useHistory } from "react-router";

export const DetailsPage = () => {
    
    const history = useHistory()

    const irParaHome = () => {
        history.goBack()
    }
    
    return (
        <div>
            <h1>Detalhes</h1>
            <button onClick={irParaHome}>Voltar</button>
        </div>
    )
}
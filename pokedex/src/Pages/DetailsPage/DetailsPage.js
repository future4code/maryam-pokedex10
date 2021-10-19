import React from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { ConteinerDetalhes, DivImagens, DivStatus, ConteinerTipoAtaques, DivTipos, DivAtaques } from "./Styled"

export const DetailsPage = () => {

    const history = useHistory()

    const irParaHome = () => {
        history.goBack()
    }

    return (
        <div>
            <Header />
            <ConteinerDetalhes>
                <DivImagens>
                    <img src="https://picsum.photos/200/200"></img>
                    <img src="https://picsum.photos/200/200"></img>
                </DivImagens>
                <DivStatus>
                    <h2>Status</h2>
                    <p><b>hp:</b> 45</p>
                    <p><b>attack:</b>23</p>
                    <p><b>defense: </b>54</p>
                    <p><b>defense: </b>35</p>
                    <p><b>special-defense:</b>26</p>
                    <p><b>speed: </b>87</p>
                </DivStatus>
                <ConteinerTipoAtaques>
                    <DivTipos>
                        <p><b>tipo1</b></p>
                        <p><b>tipo2</b></p>
                    </DivTipos>
                    <DivAtaques>
                        <h2>Principais Ataques</h2>
                        <p>Ataque1</p>
                        <p>Ataque2</p>
                        <p>Ataque3</p>
                        <p>Ataque4</p>
                        <p>Ataque5</p>
                    </DivAtaques>
                </ConteinerTipoAtaques>
            </ConteinerDetalhes>
            <h1>Detalhes</h1>
            <button onClick={irParaHome}>Voltar</button>
        </div>
    )
}
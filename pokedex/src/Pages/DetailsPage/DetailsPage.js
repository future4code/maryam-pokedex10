import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Header from "../../components/Header";
import { ConteinerDetalhes, DivImagens, DivStatus, ConteinerTipoAtaques, DivTipos, DivAtaques } from "./Styled"

export const DetailsPage = () => {
    const [imagemFrente, setImagemFrente] = useState({})
    const [imagemCostas, setImagemCostas] = useState({})

    const params = useParams()
    console.log( "seu sou params", params)
    const history = useHistory()

    const irParaHome = () => {
        history.push("/")
    }
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((res) => {
            setImagemFrente( res.data.sprites.versions['generation-v']['black-white'].animated.front_default)
            setImagemCostas(res.data.sprites.versions['generation-v']['black-white'].animated.back_default)
        }).catch((err)=>{
            console.log(err.response)
        })
    },[])
    
 

   

    return (
        <div>
            <Header mudarPagina = {irParaHome} nome = {"Ir Para Home"}/>
            <ConteinerDetalhes>
                <DivImagens>
                    <img src={imagemFrente}></img>
                    <img src={imagemCostas}></img>
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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Header from "../../components/Header";
import { ConteinerDetalhes, DivImagens, DivStatus, ConteinerTipoAtaques, DivTipos, DivAtaques } from "./Styled"


export const DetailsPage = () => {
    const [imagemFrente, setImagemFrente] = useState()
    const [imagemCostas, setImagemCostas] = useState()
    const [vidaHp,setVidaHp] = useState()
    const [attack, setAttack] = useState()
    const [defense, setDefense] = useState()
    const [specialDefense, setEspecialDefense] = useState()
    const [specialAttack, setEspecialAttack] = useState()
    const [speed, setSpeed] = useState()
    const [type1, setType1] = useState()
    const [type2, setType2] = useState()
    const [ataque1, setAtaque1]=useState()
    const [ataque2, setAtaque2]=useState()
    const [ataque3, setAtaque3]=useState()
    const [ataque4, setAtaque4]=useState()
    const [ataque5, setAtaque5]=useState()
    

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
            setVidaHp(res.data.stats[0].base_stat)
            setAttack (res.data.stats[1].base_stat)
            setDefense (res.data.stats[2].base_stat)
            setEspecialAttack (res.data.stats[3].base_stat)
            setSpeed (res.data.stats[5].base_stat)
            setEspecialDefense (res.data.stats[4].base_stat)
            setType1(res.data.types[0].type.name)
            console.log(res.data.types[0].type.name)
            setAtaque1(res.data.moves[0].move.name)
            console.log(res.data)
            setAtaque2(res.data.moves[1].move.name)
            setAtaque3(res.data.moves[2].move.name)
            setAtaque4(res.data.moves[3].move.name)
            setAtaque5(res.data.moves[4].move.name)
            setType2(res.data.types[1].type.name)
            
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
                    <p><b>hp:</b> {vidaHp}</p>
                    <p><b>attack:</b>{attack}</p>
                    <p><b>defense: </b>{defense}</p>
                    <p><b>special-attack: </b>{specialAttack}</p>
                    <p><b>special-defense:</b>{specialDefense}</p>
                    <p><b>speed: </b>{speed}</p>
                </DivStatus>
                <ConteinerTipoAtaques>
                    <DivTipos>
                        <p><b>{type1}</b></p>
                        <p><b>{type2}</b></p>
                    </DivTipos>
                    <DivAtaques>
                        <h2>Principais Ataques</h2>
                        <p>{ataque1}</p>
                        <p>{ataque2}</p>
                        <p>{ataque3}</p>
                        <p>{ataque4}</p>
                        <p>{ataque5}</p>
                    </DivAtaques>
                </ConteinerTipoAtaques>
            </ConteinerDetalhes>
            <h1>Detalhes</h1>
            <button onClick={irParaHome}>Voltar</button>
        </div>
    )
}
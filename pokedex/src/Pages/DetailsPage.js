import React, {useState} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { goToHome } from "../router/Coordinator";
import Header from "../components/Header";
import { ConteinerDetalhes, DivImagens, DivStatus, ConteinerTipoAtaques, DivTipos, DivAtaques } from "../styled/DetailsStyled"

export const DetailsPage = () => {

    const history = useHistory()
    const {name} = useParams()
    const [details, setDetails] = useState({})


    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            console.log(response.data)
            setDetails(response.data)          
        }).catch((error) => { 
            console.log(error)          
        })

    return (
        <div>
            <Header />
            <h1>Detalhes</h1>
            <ConteinerDetalhes>
                <DivImagens>
                    <img src={details.sprites && details.sprites.versions['generation-v']['black-white'].animated.front_default}/>
                    <img src={details.sprites && details.sprites.versions['generation-v']['black-white'].animated.back_default}/>
                </DivImagens>
                <DivStatus>
                    <h2>Status</h2>
                    {details.stats && details.stats.map((status) => {
                        return <p><b>{status.stat.name}: </b>{status.base_stat}</p>
                    })}
                </DivStatus>
                <ConteinerTipoAtaques>
                    <DivTipos>
                        <h2>Tipo</h2>
                        {details.types && details.types.map((type) => {
                            return <i>{type.type.name}</i>
                        })}
                    </DivTipos>
                    <DivAtaques>
                        <h2>Principais Ataques</h2>
                        {details.moves && details.moves.map((attack, indexOfAttacks) => {
                            return indexOfAttacks < 3 && <p>{attack.move.name}</p>
                        })}
                    </DivAtaques>
                </ConteinerTipoAtaques>
            </ConteinerDetalhes>
            <button onClick={() => goToHome(history)}>Voltar</button>
        </div>
    )
}
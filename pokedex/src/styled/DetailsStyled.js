import styled from "styled-components";

export const ConteinerDetalhes = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 40px;
`
export const DivImagens = styled.div`
display: flex;
flex-direction: column;
height: 60vh;
img{
    border: solid black 1px;
    padding: 10px;
    height: 140px;
}
`
export const DivStatus = styled.div`
display: flex;
flex-direction: column;
margin: 0 20px;
border: black solid 1px;
padding: 20px;

`
export const ConteinerTipoAtaques = styled.div`
display: flex;
flex-direction: column;
height: 60vh;
justify-content: space-between;
`
export const DivTipos = styled.div`
display: flex;
width: 200px;
justify-content: space-around;
border: black solid 1px;
`
export const DivAtaques = styled.div`
display: flex;
flex-direction: column;
width: 200px;
border: solid black 1px;
padding: 10px;
`
export const goToBack = (history) => {
    history.go()
}

export const goToHome = (history) => {
    history.push("/")
}

export const goToPokedex = (history) => {
    history.push("/pokedex")
}
  
export const goToPokeDetails = (history, name) => {
    history.push(`/details/${name}`)
}
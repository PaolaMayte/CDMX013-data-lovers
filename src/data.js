function typeFilter (pokemons, type){
    const typesResult = pokemons.filter( (pokemon)=>{
        if (pokemon.type.includes(type)){
        return true
        }
        else {
        return false
        }
    })
    return typesResult
}
export {typeFilter}
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

function regionFilter (pokemons, region){
    const regionResult = pokemons.filter( (pokemon)=>{
        if (pokemon.generation.name.includes(region)){
            return true
        }
        else {
            return false
        }
    })
    return regionResult
}
export {typeFilter, regionFilter}
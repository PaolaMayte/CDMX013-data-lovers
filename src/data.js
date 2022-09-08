function typeFilter(pokemons, type) {
    const typesResult = pokemons.filter((pokemon) => {
        if (pokemon.type.includes(type)) {
            return true
        }
        else {
            return false
        }
    })
    return typesResult
}

function regionFilter(pokemons, region) {
    // console.log(pokemons)
    // console.log(region)


    const regionResult = pokemons.filter((pokemon) => {
        return pokemon.generation.name === region
    })
    console.log(regionResult)
    return regionResult
}

function sortAZ(pokemons) {
    const pokeNames = pokemons.sort((onePokemon, twoPokemon) => {
        return onePokemon.name.localeCompare(twoPokemon.name)
    })
    return pokeNames
}

export { typeFilter, regionFilter, sortAZ }
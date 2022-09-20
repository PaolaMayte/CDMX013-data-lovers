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
    //console.log (regionResult)
    return regionResult
}

function sortAZ(pokemons) {
    const pokeNames = pokemons.sort((onePokemon, twoPokemon) => {
        return onePokemon.name.localeCompare(twoPokemon.name)
    })
    return pokeNames
}

function sortByNum(pokemons) {
    const pokeNumbers = pokemons.sort((onePokemon, twoPokemon) => {
        return onePokemon.num.localeCompare(twoPokemon.num)
    })
    return pokeNumbers
}

function combatPokemon(pokemons) {
    const maxCP = pokemons.sort(function (onePokemon, twoPokemon) {
        const maxCP1 = parseInt(onePokemon.stats['max-cp']);
        const maxCP2 = parseInt(twoPokemon.stats['max-cp']);
        return maxCP2 - maxCP1
    })
    return maxCP
}


export { typeFilter, regionFilter, sortAZ, sortByNum, combatPokemon }

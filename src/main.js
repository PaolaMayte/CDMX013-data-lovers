//importando data de otros archivos
//import pokemon from './data/pokemon/pokemon.js'
import allData from './data/pokemon/pokemon.js'
import { regionFilter, typeFilter, sortAZ, sortByNum, combatPokemon } from './data.js'

//declarando la constante del elemento donde de van a imprimir las tajetas en nuestro HTML
const root = document.getElementById('root')
root.classList = 'displayStyle' //añade formato al elemento para mostrarlo en grid
const pokemonsData = allData.pokemon //metiendo la data en una constante para nuestras funciones

// declarando una constante que contenga nuestra función para crear tarjetas e imprimirlas en pantalla
const generadorHTML = (pokemon) => {
    const div = document.createElement('div') // declarando una constante que crea un div en el HTML
    div.classList = 'card'

    const img = document.createElement('img')
    img.setAttribute('src', pokemon.img)
    img.classList = 'pokemon'

    const num = document.createElement('h3')
    num.textContent = '#' + pokemon.num
    num.classList = 'num'

    const name = document.createElement('h3')
    name.textContent = pokemon.name
    

    div.append(num, img, name) //anexando las constantes creadas para el contenido de la tarjeta a l div que estamos creando
    return div
}

//convocando la función del generador de tarjetas para imprimir todos los pokemones contenidos en la data
pokemonsData.forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))

//filtrando tipo y regiones adjuntándolos al selector de manera dinámica
const types = []
const typeSelector = document.getElementById("type")
const regionSelector = document.getElementById('region')

pokemonsData.forEach(onePokemon => {
    onePokemon.type.forEach(pokemonType => types.push(pokemonType))
})
let unique = [...new Set(types)]; // eliminando los elementos repetidos del array de tipos
unique.forEach(oneType => {
    const typeOption = document.createElement('option')
    typeOption.textContent = oneType
    typeOption.value = oneType
    typeSelector.append(typeOption)
})

typeSelector.addEventListener('change', (event) => {
    root.innerHTML = ''
    regionSelector.selectedIndex = 0
    const pokemonType = event.target.value
    const filteredPokemons = typeFilter(pokemonsData, pokemonType)
    const numberPokemons = filteredPokemons.length
    const totalPokemons = pokemonsData.length
    const pokePercentage = ((numberPokemons * 100) / totalPokemons).toFixed(2)
    const typePercent=document.createElement('div')
    typePercent.classList = 'text'
    typePercent.textContent= 'These pokemon type accounts for ' + pokePercentage + '% of all Pokemon!'
    root.appendChild(typePercent)
    typeFilter(pokemonsData, event.target.value).forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
    
})

regionSelector.addEventListener('change', (event) => {
    root.innerHTML = ''
    typeSelector.selectedIndex = 0
    regionFilter(pokemonsData, event.target.value).forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
})

//función para ordenado
const sortSelector = document.getElementById('sort')
sortSelector.addEventListener('change', (event) => {
    const value = event.target.value
    root.innerHTML = ''
    if (value === 'number') {
        const sortedNumbers = sortByNum(pokemonsData)
        sortedNumbers.forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
    } else {
        const sortedItems = sortAZ(pokemonsData)
        if (value === 'az') {
            sortedItems.forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
        }
        if (value === 'za') {
            sortedItems.reverse().forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
        }
    }
})

const statsButton = document.getElementById('stats');
statsButton.addEventListener('click', () => {
    root.innerHTML = ''
    const strongest = document.createElement('div')
    strongest.classList = 'text'
    const top10 = combatPokemon(pokemonsData).slice(0, 9)
    strongest.textContent = 'Below we show you the 10 strongest pokemon!'
    root.appendChild(strongest)
    top10.forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
    
})


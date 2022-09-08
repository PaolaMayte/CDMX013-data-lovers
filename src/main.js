//importando data de otros archivos
//import pokemon from './data/pokemon/pokemon.js'
import allData from './data/pokemon/pokemon.js'
import {regionFilter, typeFilter, sortAZ} from './data.js'

//declarando la constante del elemento donde de van a imprimir las tajetas en nuestro HTML
const root = document.getElementById ('root')
root.classList = 'displayStyle' //añade formato al elemento para mostrarlo en grid

const pokemonsData=allData.pokemon //metiendo la data en una constante para nuestras funciones

// declarando una constante que contenga nuestra función para crear tarjetas e imprimirlas en pantalla
const generadorHTML=(pokemon)=>{
    const div = document.createElement('div') // declarando una constante que crea un div en el HTML
    div.classList='card'

    const img = document.createElement('img')
    img.setAttribute('src',pokemon.img)
    img.classList= 'pokemon'

    const num = document.createElement('h3')
    num.textContent = '#' + pokemon.num
    num.classList='num'

    const name = document.createElement('h3')
    name.textContent = pokemon.name
    
    div.append(num,img,name) //anexando las constantes creadas para el contenido de la tarjeta a l div que estamos creando
    return div  
}

//convocando la función del generador de tarjetas para imprimir todos los pokemones contenidos en la data
pokemonsData.forEach(onePokemon=>root.appendChild(generadorHTML(onePokemon)))


const types= []
const typeSelector= document.getElementById("type")
const regionSelector = document.getElementById('region')

pokemonsData.forEach(onePokemon=>{
    onePokemon.type.forEach(pokemonType=> types.push(pokemonType))
})
let unique = [...new Set(types)]; // eliminando los elementos repetidos del array de tipos
unique.forEach (oneType=> {
    const typeOption = document.createElement('option')
    typeOption.textContent = oneType
    typeOption.value=oneType
    typeSelector.append(typeOption)})

// typeSelector.addEventListener('click', typesFilter);
// function typesFilter(){
//     pokemonsData.filter()
// }

// FILTRO TYPES
//const pokeTypes = typeFilter(pokemonsData, types)

typeSelector.addEventListener('change',(event)=>{
    root.innerHTML=''
    regionSelector.selectedIndex = 0
typeFilter (pokemonsData, event.target.value).forEach(onePokemon=>root.appendChild(generadorHTML(onePokemon)))
})

//Filtro de región

// pokemonsData.forEach(onePokemon=>{
//     pokemonsData.region.forEach(pokemonRegion=> region.push(pokemonRegion))
//     console.log(region)
// })

//console.log(regionSelector)
//const pokeRegion = regionFilter(pokemonsData, region)
// console.log('repoyon', pokeRegion)

regionSelector.addEventListener('change', (event)=>{
    root.innerHTML=''
    typeSelector.selectedIndex = 0
    regionFilter (pokemonsData, event.target.value).forEach(onePokemon=>root.appendChild(generadorHTML(onePokemon)))
})

const sortSelector = document.getElementById('sort')
sortSelector.addEventListener('change', (event)=>{
    const value = event.target.value
    const sortedItems = sortAZ(pokemonsData, event.target)
    root.innerHTML=''
    if (value === 'az'){
        sortedItems.forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
    }
    if (value === 'za'){
        sortedItems.reverse().forEach(onePokemon => root.appendChild(generadorHTML(onePokemon)))
    }    
})
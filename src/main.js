import pokemon from './data/pokemon/pokemon.js'
import allData from './data/pokemon/pokemon.js'
import {typeFilter} from './data.js'
const root = document.getElementById ('root')
root.classList = 'displayStyle'

const pokemonsData=allData.pokemon
// data.pokemon.forEach(element =>{
// const card = `<div class="card">
// <img src="25.png">
// <h3>nombre</h3> 
// </div>`
// main.append (card)
// })

// crear tarjeta

const generadorHTML=(pokemon)=>{
    const div = document.createElement('div')
    div.classList='card'

    const img = document.createElement('img')
    img.setAttribute('src',pokemon.img)
    img.classList= 'pokemon'

    const num = document.createElement('h3')
    num.textContent = '#' + pokemon.num
    num.classList='num'

    const name = document.createElement('h3')
    name.textContent = pokemon.name
    
    div.append(num,img,name)
    return div  
}

pokemonsData.forEach(onePokemon=>root.appendChild(generadorHTML(onePokemon)))


const types= []
const typePokemon= document.getElementById("type")
pokemonsData.forEach(onePokemon=>{
    onePokemon.type.forEach(pokemonType=> types.push(pokemonType))
})
let unique = [...new Set(types)];
console.log (unique)
unique.forEach (oneType=> {
    const typeOption = document.createElement('option')
    typeOption.textContent = oneType
    typeOption.value=oneType
    typePokemon.append(typeOption)})

// typeSelector.addEventListener('click', typesFilter);
// function typesFilter(){
//     pokemonsData.filter()
// }

// FILTRO TYPES
const masterFilter = typeFilter(pokemonsData, 'fire')
console.log('poyo', masterFilter)

typePokemon.addEventListener('change',(event)=>{
    root.innerHTML=''
typeFilter (pokemonsData,event.target.value).forEach(onePokemon=>root.appendChild(generadorHTML(onePokemon)))
    console.log (typeFilter (pokemonsData,event.target.value))
})
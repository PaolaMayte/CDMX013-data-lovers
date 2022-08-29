
import allData from './data/pokemon/pokemon.js'
const root = document.getElementById ('root')
root.classList = 'displayStyle'
import data from './data/pokemon/pokemon.js'
const main = document.getElementById ('main')
main.classList.add('main')

const pokemons= data.pokemon
// data.pokemon.forEach(element =>{
// const card = `<div class="card">
// <img src="25.png">
// <h3>nombre</h3> 
// </div>`
// main.append (card)
// })

// crear tarjetas para cada pokemon:
const generadorHTML=(pokemon)=>{
    const div = document.createElement('div')

    div.classList='card'

    const img = document.createElement('img')
    img.setAttribute('src',pokemon.img)
    img.classList= 'pokemon'

    const num = document.createElement('h3')
    num.textContent = '#' + pokemon.num
    num.classList='num'
    div.classList.add('card')

    const img = document.createElement('img')
    img.setAttribute('src',pokemon.img)
    img.classList.add('card>img')

    const num = document.createElement('h2')
    num.textContent = pokemon.num
    num.classList.add('card>h2')


    const name = document.createElement('h3')
    name.textContent = pokemon.name
    name.classList.add('card>h3')
    
    div.append(num,img,name)
    return div  
}

pokemons.forEach(onePokemon=>main.appendChild(generadorHTML(onePokemon)))
//console.log(data.pokemon[i=0].num)
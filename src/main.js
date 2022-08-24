import allData from './data/pokemon/pokemon.js'
const root = document.getElementById ('root')

const pokemons=allData.pokemon
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

    const img = document.createElement('img')
    img.setAttribute('src',pokemon.img)

    const name = document.createElement('h3')
    name.textContent = pokemon.name
    
    div.append(img,name)
    return div  
}

pokemons.forEach(onePokemon=>root.appendChild(generadorHTML(onePokemon)))
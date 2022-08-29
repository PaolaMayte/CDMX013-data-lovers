import allData from './data/pokemon/pokemon.js'
const root = document.getElementById ('root')
root.classList = 'displayStyle'

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

pokemons.forEach(onePokemon=>root.appendChild(generadorHTML(onePokemon)))
//importando datos del archivo json:
import data from './data/pokemon/pokemon.json' assert {type: 'json'};
//pruebas de convocación de datos del json:
console.log (data.pokemon)
console.log (data.pokemon[0].name + ', ' + data.pokemon[1].name + ', ' + data.pokemon[2].name);
console.log (data.pokemon[0].type)
console.log (data.pokemon[0].type[1])
//ejemplo de notación de corchetes:
console.log (data['pokemon'][0]['type'])
console.log (data.pokemon[0].encounter['base-flee-rate'])
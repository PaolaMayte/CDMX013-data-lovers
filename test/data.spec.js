import { typeFilter, regionFilter, sortAZ, sortByNum, combatPokemon } from '../src/data.js';
import allData from '../src/data/pokemon/pokemon.js';

describe('type filters', () => {
  it('is a filter by water type', () => {
    //given user wants to filter pokemon by water type
    //when they select the water type option
    //then water type pokemon will appear
    const type = 'water';
    const result = typeFilter(allData.pokemon, type)
    expect(result.length).toBe(50)
  })
})

describe('region filters', () => {
  it('is a filter by region', () => {
    const generation = 'kanto';
    const resultGeneration = regionFilter(allData.pokemon, generation)
    expect(resultGeneration.length).toBe(151)
  })
})

describe('sortAZ', () => {
  it('is an alphabetical sorting function', () => {
    const pokemonsArray = [{name:'daniel'},{name:'camilo'}, {name:'aline'}];
    const sortedArray = [{name:'aline'}, {name:'camilo'}, {name:'daniel'}];
    expect(sortAZ(pokemonsArray)).toEqual(sortedArray);
  })
})

describe('sortByNum', () => {
  it('is a sorting function', () => {
    const pokemonsArray = [{num:'7'},{num:'9'}, {num:'2'}];
    const sortedArray = [{num:'2'}, {num:'7'}, {num:'9'}];
    expect(sortByNum(pokemonsArray)).toEqual(sortedArray);
  })
})

describe('combatPokemon', () => {
  it('is a sorting function', () => {
    const pokemonsArray = [{name:'pikachu', stats:{"max-cp": "1261"}},{name:'mewtwo', stats:{"max-cp": "4178"}}, {name:'magikarp', stats:{"max-cp": "274"}}];
    const stats= [{ name: 'mewtwo', stats: { 'max-cp': '4178' } },
      { name: 'pikachu', stats: { 'max-cp': '1261' } },
      { name: 'magikarp', stats: { 'max-cp': '274' } }
    ]
    expect(combatPokemon(pokemonsArray)).toEqual(stats);
  })
})
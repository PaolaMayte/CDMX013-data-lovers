import { typeFilter, regionFilter,sortAZ } from '../src/data.js';
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
  it('is an alphabetical  sort', () => {
    const pokemonsArray = [{name:'daniel'},{name:'camilo'}, {name:'aline'}];
    const sortedArray = [{name:'aline'}, {name:'camilo'}, {name:'daniel'}];
    expect(sortAZ(pokemonsArray)).toEqual(sortedArray);
  })
})


import IPokemonData from "../interfaces/IPokemonData"
import IPokemonLink from "../interfaces/IPokemonLink";


export const fetchPokemonData = async (url: string): Promise<IPokemonData> => {
  const data = await (await fetch(url)).json()
  
  const sprites = data.sprites.other;

  const pokemonData: IPokemonData = {
    id: data.id,
    name: data.name,
    sprite: sprites.dream_world.front_default || 
            sprites.home.front_default ||
            sprites['official-artwork'].front_default ||
            data.sprites.front_shiny,
    height: data.height,
    weight: data.weight,
    types: data.types.map((slot: any) => slot.type.name),
    abilities: data.abilities.map((entry: any) => entry.ability.name),
    // @ts-ignore
    stats: Object.fromEntries(data.stats.map((entry: any) => [entry.stat.name, entry.base_stat]))
  }

  return pokemonData;
}

export const fetchPokemons = async (count: number, offset: number): Promise<IPokemonLink[]> => {
  const query = `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=${offset}`;
  const response = await fetch(query);
  const json = await response.json();
  return json.results;
}

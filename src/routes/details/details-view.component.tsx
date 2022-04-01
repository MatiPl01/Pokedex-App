import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchPokemonData } from '../../services/pokemon-data.service';
import { IPokemonData } from '../../interfaces/IPokemonData';


const DetailsView = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(pokemon => setPokemon(pokemon))
  }, []);

  // TODO -fix this ignore
  // @ts-ignore
  const data: IPokemonData = pokemon;

  return Object.keys(data).length !== 0 ? (
    <main className="details" data-type={data.types[0]}>
      <h1>{data.name}</h1>
      <img src={data.sprite} alt={data.name} />
    </main>
  ) : (
    <main className="details">
      <h1>Pokemon not found</h1>
    </main>
  )
}

export default DetailsView;

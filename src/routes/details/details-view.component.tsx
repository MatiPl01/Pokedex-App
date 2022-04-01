import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchPokemonData } from '../../services/pokemon-data.service';
import IPokemonData from '../../interfaces/IPokemonData';
import Loader from '../../components/loader/loader.component';
import Error from '../../components/error/error.component';


const DetailsView = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState({});

  useEffect(() => {
    fetchPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(pokemon => {
        setPokemon(pokemon);
        setIsLoading(false);
      })
      .catch(_ => {
        console.error('Cannot fetch pokemon data');
        setIsLoading(false);
      })
  }, []);

  // TODO -fix this ignore
  // @ts-ignore
  const data: IPokemonData = pokemon;

  if (isLoading) return (
    <main className="details">
      <Loader />
    </main>
  )

  if (Object.keys(data).length !== 0) return (
    <main className="details" data-type={data.types[0]}>
      <article className="pokemon-details">
        <figure className="pokemon-details__figure">
          <div className="pokemon-details__image-wrapper">
            <img className="pokemon-details__image" src={data.sprite} alt={data.name} />
          </div>
          <figcaption className="pokemon-details__caption">
            <p className="pokemon-details__caption-text" data-text={data.name}>{data.name}</p>
          </figcaption>
        </figure>

        <section className="pokemon-details__content">
          <header className='pokemon-details__header'>
            <h3 className="pokemon-details__name">{data.name}</h3>
          </header>

          <section className="pokemon-details__types">
            <h4 className='pokemon-details__types-heading'>Types</h4>
            <ul className="pokemon-details__types-list">{
                data.types.map((type, idx) => {
                  return (
                    <li className="pokemon-details__types-item type-box" data-type={type} key={idx}>
                      <p className="pokemon-details__types-text type-box__text">{type}</p>
                    </li>
                  )
                })
              }
            </ul>
          </section>

          <section className="pokemon-details__abilities">
            <h4 className='pokemon-details__abilities-heading'>Abilities</h4>
            <ul className="pokemon-details__abilities-list">{
                data.abilities.map((ability, idx) => {
                  return (
                    <li className="pokemon-details__abilities-item" key={idx}>
                      <p className="pokemon-details__abilities-text">{ability}</p>
                    </li>
                  )
                })
              }
            </ul>
          </section>

          <section className="pokemon-details__params">
            <h4 className='pokemon-details__params-heading'>Parameters</h4>
            <ul className="pokemon-details__params-list">
              <li className="pokemon-details__params-item">
                <p className="pokemon-details__params-value">{data.weight}</p>
                <p className="pokemon-details__params-text">Weight</p>
              </li>
              <li className="pokemon-details__params-item">
                <p className="pokemon-details__params-value">{data.height}</p>
                <p className="pokemon-details__params-text">Height</p>
              </li>
            </ul>
          </section>

          <section className="pokemon-details__stats">
            <h4 className='pokemon-details__stats-heading'>Statistics</h4>
            <ul className="pokemon-details__stats-list">
              {
                Object.entries(data.stats).map(([k, v], idx) => (
                  <li className="pokemon-details__stats-item" key={idx}>
                    <p className="pokemon-details__stats-value">{v}</p>
                    <p className="pokemon-details__stats-text">{k}</p>
                  </li>
                ))
              }
            </ul>
          </section>
        </section>
      </article>
    </main>
  )

  return (
    <main className="details">
      <Error heading="Something went wrong!" message="Cannot fetch Pokemon's data" />
    </main>
  )
}

export default DetailsView;

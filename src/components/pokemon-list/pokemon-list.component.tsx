import { Component, Fragment } from "react";
import PokemonCard from "./pokemon-card/pokemon-card.component"
import SearchBox from './search-box/search-box.component'


interface IProps {
  pokemons: {
    name: string,
    url: string
  }[]
}

class PokemonList extends Component<IProps> {
  render() {
    const { pokemons } = this.props;

    return (
      <Fragment>
        <SearchBox />
      <ul className="pokemon-list">
        { pokemons.map((pokemon, idx) => {
          return (
            <li className="pokemon-list__item" key={idx}>
              <PokemonCard url={pokemon.url} />
            </li>
          )
        })}
      </ul>
      </Fragment>
    )
  }
}

export default PokemonList;

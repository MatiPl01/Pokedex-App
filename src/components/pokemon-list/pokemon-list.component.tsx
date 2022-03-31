import { Component } from "react";
import PokemonCard from "./pokemon-card/pokemon-card.component"

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
        <ul className="pokemon-list">
          { pokemons.map(pokemon => {
            return (
              <li className="pokemon-list__item" key={pokemon.name}>
                <PokemonCard url={pokemon.url} />
              </li>
            )
          })}
        </ul>
    )
  }
}

export default PokemonList;

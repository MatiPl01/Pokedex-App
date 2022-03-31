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
        <ul className="pokemons-list">
          { pokemons.map(pokemon => {
            return <PokemonCard url={pokemon.url}/>
          })}
        </ul>
    )
  }
}

export default PokemonList;

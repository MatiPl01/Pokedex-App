import { Component } from "react";
import { IPokemonData } from "../../../interfaces/IPokemonData";


interface IProps {
  url: string
}

interface IState {
  pokemonData: IPokemonData | null
}

class PokemonCard extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      pokemonData: null
    };

    this.loadPokemonData();
  }

  private async loadPokemonData() {
    const { url } = this.props;
    const data = await (await fetch(url)).json()

    const pokemonData: IPokemonData = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
      height: data.height,
      weight: data.weight,
      types: data.types.map((slot: any) => slot.type.name),
      abilities: data.abilities.map((entry: any) => entry.ability.name),
      // @ts-ignore
      stats: Object.fromEntries(data.stats.map((entry: any) => [entry.stat.name, entry.base_stat]))
    }

    this.setState({ pokemonData });
  }

  render() {
    const { pokemonData: data } = this.state;
    if (!data) return; // Todo - add loading animation

    return (
      <img src={data.sprite} alt={data.name} />
    )
  }
}

export default PokemonCard;

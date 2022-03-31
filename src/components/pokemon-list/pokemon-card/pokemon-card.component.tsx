import { type } from "os";
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
  }

  componentDidMount() {
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
        // TODO - replace data.name (key) with pokemon id
        <article className="pokemon-card" key={data.name}>
          <a className="pokemon-card__link" href="#">
            <figure className="pokemon-card__figure" data-type={data.types[0]}>
              <div className="pokemon-card__image-wrapper">
                <img className="pokemon-card__image" src={data.sprite} alt={data.name} />
              </div>
              <figcaption className="pokemon-card__caption">{data.name}</figcaption>
            </figure>

            <header className="pokemon-card__header">
              <h3 className="pokemon-card__name">{data.name}</h3>
              <ul className="pokemon-card__types">{
                  data.types.map((type: string, idx: number) => {
                    return (
                      <li className="pokemon-card__types-item" key={idx}>
                        <p className="pokemon-card__type">{type}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </header>
          </a>
        </article>
    )
  }
}

export default PokemonCard;

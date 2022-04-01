import { Component } from "react";
import { Link } from "react-router-dom";
import { IPokemonData } from "../../../interfaces/IPokemonData";
import { fetchPokemonData } from "../../../services/pokemon-data.service";

interface IProps {
  url: string;
}

interface IState {
  pokemonData: IPokemonData | null;
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
    const pokemonData = await fetchPokemonData(url);
    this.setState({ pokemonData });
  }

  render() {
    const { pokemonData: data } = this.state;
    if (!data) return;

    return (
        <article className="pokemon-card" key={data.id}>
          <Link className="pokemon-card__link" to={`${data.id}`}>
            <figure className="pokemon-card__figure" data-type={data.types[0]}>
              <div className="pokemon-card__image-wrapper">
                <img className="pokemon-card__image" src={data.sprite} alt={data.name} />
              </div>
              <figcaption className="pokemon-card__caption">
                <p className="pokemon-card__caption-text">{data.name}</p>
              </figcaption>
            </figure>

            <header className="pokemon-card__header">
              <h3 className="pokemon-card__name">{data.name}</h3>
              <ul className="pokemon-card__types">{
                  data.types.map((type, idx) => {
                    return (
                      <li className="pokemon-card__types-item type-box" data-type={type} key={idx}>
                        <p className="pokemon-card__type type-box__text">{type}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </header>
          </Link>
        </article>
    )
  }
}

export default PokemonCard;

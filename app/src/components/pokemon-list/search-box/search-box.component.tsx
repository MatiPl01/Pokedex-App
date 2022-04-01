import { Component } from "react";
import { Link } from 'react-router-dom';
import { fetchPokemons } from '../../../services/pokemon-data.service';
import { withRouter } from '../../../middlewares/with-router.middleware';


interface IProps {
  navigate: (url: string) => {}
}

interface IPokemon {
  name: string,
  url: string
}

interface IState {
  pokemons: IPokemon[],
  search: string,
  foundPokemons: IPokemon[]
}

class SearchBox extends Component<IProps, IState> {
  private static readonly MAX_POKEMONS_COUNT = 9999;

  constructor(props: IProps) {
    super(props);

    this.state = {
      pokemons: [],
      search: '',
      foundPokemons: []
    }
  }

  componentDidMount() {
    this.loadPokemons()
  }

  private async loadPokemons() {
    const pokemons = await fetchPokemons(SearchBox.MAX_POKEMONS_COUNT, 0);
    this.setState({ ...this.state, pokemons });
  }

  private handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { pokemons } = this.state;
    const search = e.target.value.trim().toLowerCase();
    const foundPokemons = search ? pokemons
      .filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search);
      })
      .sort((a, b) => a.name.indexOf(search) - b.name.indexOf(search)) : [];

    this.setState({
      ...this.state,
      search,
      foundPokemons
    });
  }

  private getIdFromUrl(url: string): number {
    const parts = url.split('/')
    return parseInt(parts[parts.length - 2]);
  }

  private handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const { foundPokemons } = this.state;
    
    if (foundPokemons.length) {
      const target = this.getIdFromUrl(foundPokemons[0].url);
      this.props.navigate(`${target}`);
    }
  }
  
  render() {
    const { foundPokemons: pokemons } = this.state;

    return (
      <form className="search-box" onSubmit={this.handleSubmit.bind(this)} >
        <input className="search-box__input" type="text" name="search-pokemon" id="search-pokemon" placeholder="Search pokemon by name" onInput={this.handleInput.bind(this)} />

        <ul className="search-box__hints">
          { pokemons.map((pokemon, idx) => {
            return (
              <li className="search-box__hint" key={idx}>
                <Link className="search-box__link" to={`${this.getIdFromUrl(pokemon.url)}`}>{pokemon.name}</Link>
              </li>
          )})
          }
        </ul>
      </form>
    )
  }
}

export default withRouter(SearchBox);

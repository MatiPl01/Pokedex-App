import { Component } from "react";
import { Link } from 'react-router-dom';


interface IProps {}

interface IPokemon {
  name: string,
  url: string
}

interface IState {
  pokemons: IPokemon[],
  filteredPokemons: IPokemon[]
}

class SearchBox extends Component<IProps, IState> {
  private static readonly MAX_POKEMONS_COUNT = 9999;

  constructor(props: IProps) {
    super(props);

    this.state = {
      pokemons: [],
      filteredPokemons: []
    }
  }

  componentDidMount() {
    this.loadPokemons()
  }

  private async loadPokemons() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${SearchBox.MAX_POKEMONS_COUNT}`)
    const json = await response.json();

    this.setState({
      pokemons: json.results,
      filteredPokemons: this.state.filteredPokemons
    })
  }

  private handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const search = e.target.value.toLowerCase();
    const { pokemons } = this.state

    this.setState({
      pokemons,
      filteredPokemons: search ? pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search);
      }).sort((a, b) => a.name.indexOf(search) - b.name.indexOf(search)) : []
    })
  }

  private getIdFromUrl(url: string): number {
    const parts = url.split('/')
    return parseInt(parts[parts.length - 2]);
  }
  
  render() {
    const { filteredPokemons: pokemons } = this.state;

    return (
      <article className="search-box">
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
      </article>
    )
  }
}

export default SearchBox;

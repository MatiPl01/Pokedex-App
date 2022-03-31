import { Component } from "react";
import NavBar from "./components/nav-bar/nav-bar.comonent";
import PokemonList from './components/pokemon-list/pokemon-list.component'


interface IProps {}

interface IState {
  pokemons: {
    name: string,
    url: string
  }[]
}


class App extends Component<IProps, IState> {
  private static readonly LOADED_POKEMONS_COUNT = 20;
  private currOffset = 0;

  constructor(props: IProps) {
    super(props);

    this.state = {
      pokemons: []
    }
  }

  async componentDidMount() {
    this.loadNewPokemons(App.LOADED_POKEMONS_COUNT)
  }

  private async loadNewPokemons(count: number) {
    const query = `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=${this.currOffset}`;
    const response = await fetch(query);
    const json = await response.json();
    const pokemons = json.results
    this.currOffset += count;

    this.setState({
      pokemons: [
        ...this.state.pokemons,
        ...pokemons
      ]
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <main className="main home">
          <PokemonList pokemons={this.state.pokemons} />
          <button className="button button--light" onClick={() => this.loadNewPokemons(App.LOADED_POKEMONS_COUNT)}>Load more Pokemons</button>
        </main>
      </div>
    )
  }
}

export default App;

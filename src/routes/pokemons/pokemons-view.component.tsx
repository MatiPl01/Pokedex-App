import { Component } from "react";
import PokemonList from '../../components/pokemon-list/pokemon-list.component';
import IPokemonLink from '../../interfaces/IPokemonLink';
import { fetchPokemons } from "../../services/pokemon-data.service";

interface IProps {}

interface IState {
  pokemons: IPokemonLink[]
}

class PokemonsView extends Component<IProps, IState> {
  private static readonly LOADED_POKEMONS_COUNT = 20;
  private currOffset = 0;
  private isLoadingDisabled = false;

  constructor(props: IProps) {
    super(props);

    this.state = {
      pokemons: []
    }
  }

  async componentDidMount() {
    this.loadNewPokemons(PokemonsView.LOADED_POKEMONS_COUNT)
  }

  private async loadNewPokemons(count: number) {
    const newPokemons = await fetchPokemons(count, this.currOffset);

    if (!newPokemons?.length) {
      this.isLoadingDisabled = true;
      return;
    }

    this.currOffset += count;
    this.setState({
      pokemons: [
        ...this.state.pokemons,
        ...newPokemons
      ]
    });
  }

  render() {
    return (
    <main className="pokemons">
      <PokemonList pokemons={this.state.pokemons} />
      {this.isLoadingDisabled || (
        <button className="button button--main" 
                onClick={() => this.loadNewPokemons(PokemonsView.LOADED_POKEMONS_COUNT)}>
          Load more Pokemons
        </button>
      )}
    </main>
    )
  }
}

export default PokemonsView;

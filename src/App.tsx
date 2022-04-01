import { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar.component";
import DetailsView from "./routes/details/details-view.component";
import HomeView from "./routes/home/home-view.component";
import PokemonView from "./routes/pokemons/pokemons-view.component";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/pokemon' element={<PokemonView />} />
          <Route path="/pokemon/:id" element={<DetailsView />} />
        </Routes>
      </Fragment>
    )
  }
}

export default App;

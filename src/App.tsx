import { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar.component";
import DetailsView from "./views/details/details-view.component";
import HomeView from "./views/home/home-view.component";
import PokemonsView from "./views/pokemons/pokemons-view.component";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <main className="main home">    
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/pokemon' element={<PokemonsView />} />
            <Route path="/pokemon/:id" element={<DetailsView />} />
          </Routes>
        </main>
      </Fragment>
    )
  }
}

export default App;

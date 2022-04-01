import { Component } from "react";
import { Link } from "react-router-dom";


class HomeView extends Component {
  render() {
    return (
      <main className="home">
        <header className="header">
          <img className="header__logo" src="./icons/svg/pokemon-logo.svg" alt="Pokemon logo"></img>

          <Link className="header__link" to="/pokemon">
            <button className="header__button button button--main">Display Pokemon list</button>
          </Link>
        </header>
      </main>
    )
  }
}

export default HomeView;

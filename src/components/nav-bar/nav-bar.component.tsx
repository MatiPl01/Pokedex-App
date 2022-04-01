import { Component } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../theme-switch/theme-switch.component";

class NavBar extends Component {
  private static readonly LOGO_TEXT = 'PokeDex'

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar__content">
          <Link className="nav-bar__logo" to="/">
            <img className="nav-bar__logo-icon" src="/icons/svg/pokeball.svg" alt="Pokeball"></img>
            <h2 className="nav-bar__logo-text">{NavBar.LOGO_TEXT}</h2>
          </Link>

          <ul className="nav-bar__links">
            <li>
              <Link className="nav-bar__link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-bar__link" to="/pokemon">Pokemons</Link>
            </li>
          </ul>

          <ul className="nav-bar__settings">
            <li className="nav-bar__setting">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;

import { Component } from "react";
import ThemeSwitch from "../theme-switch/theme-switch.component";

class NavBar extends Component {
  private static readonly LOGO_TEXT = 'PokeDex'

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar__group">
          {/* TODO - use better logo */}
          <a className="nav-bar__logo" href="#">
            <img className="nav-bar__logo-icon" src="/icons/svg/pokeball.svg" alt="Pokeball logo"></img>
            <h2 className="nav-bar__logo-text">{NavBar.LOGO_TEXT}</h2>
          </a>

          <ul className="nav-bar__links">
            <li>
              <a className="nav-bar__link" href="#">Home</a>
            </li>
            <li>
              <a className="nav-bar__link" href="#">List</a>
            </li>
          </ul>
        </div>

        <ul className="nav-bar__settings">
          <li className="nav-bar__setting">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;

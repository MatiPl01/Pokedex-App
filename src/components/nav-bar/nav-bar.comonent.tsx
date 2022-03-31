import { Component } from "react";
import ThemeSwitch from "../theme-switch/theme-switch.component";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar__group">
          {/* TODO - use better logo */}
          <h2 className="nav-bar__logo">Pokedex</h2>

          <ul className="nav-bar__links">
            <li>
              <a className="nav-bar__link" href="#">Home</a>
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

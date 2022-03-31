import { Component } from "react";


class ThemeSwitch extends Component {
  onToggle(e: React.ChangeEvent<HTMLInputElement>) {
    const theme = e.target.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
  }

  render() {
    return (
      <button className="theme-switch">
        <input className="theme-switch__checkbox" type="checkbox" name="theme-switch-checkbox" id="theme-switch-checkbox" onChange={this.onToggle} />

        <label className="theme-switch__label" htmlFor="theme-switch-checkbox">
          <div className="theme-switch__notch">
            <div className="theme-switch__crater"></div>
            <div className="theme-switch__crater"></div>
          </div>

          <div className="theme-switch__shapes">
            <div className="theme-switch__shape theme-switch__shape--sm"></div>
            <div className="theme-switch__shape theme-switch__shape--sm"></div>
            <div className="theme-switch__shape theme-switch__shape--md"></div>
            <div className="theme-switch__shape theme-switch__shape--lg"></div>
          </div>
        </label>
      </button>
    )
  }
}

export default ThemeSwitch;

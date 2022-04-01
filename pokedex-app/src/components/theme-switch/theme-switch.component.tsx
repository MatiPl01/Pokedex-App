import { Component } from "react";


class ThemeSwitch extends Component {
  private static readonly SAVE_THEME_KEY = 'theme';
  private static readonly SWITCH_CHECKBOX_ID = 'theme-switch-checkbox';
  private static readonly DARK_THEME_NAME = 'dark';
  private static readonly LIGHT_THEME_NAME = 'light';

  onToggle(e: React.ChangeEvent<HTMLInputElement>) {
    const theme = e.target.checked ? ThemeSwitch.DARK_THEME_NAME : ThemeSwitch.LIGHT_THEME_NAME;
    this.setTheme(theme);
  }

  componentDidMount() {
    this.loadTheme()
  }

  private loadTheme() {
    if (!this.loadSavedTheme()) {
      this.loadPreferredTheme()
    }
  }

  private loadSavedTheme(): boolean {
    const theme = localStorage.getItem(ThemeSwitch.SAVE_THEME_KEY);
    if (!theme) return false;
    this.setTheme(theme);
    const checkboxEl = (document.getElementById(ThemeSwitch.SWITCH_CHECKBOX_ID) as HTMLInputElement);
    checkboxEl.checked = theme === ThemeSwitch.DARK_THEME_NAME;
    return true;
  }

  private loadPreferredTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setTheme(ThemeSwitch.DARK_THEME_NAME);
    }
  }
  
  private setTheme(theme: string) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(ThemeSwitch.SAVE_THEME_KEY, theme);
  }

  render() {
    return (
      <button className="theme-switch">
        <input className="theme-switch__checkbox" type="checkbox" name="theme-switch-checkbox" id={ThemeSwitch.SWITCH_CHECKBOX_ID} onChange={this.onToggle.bind(this)} />

        <label className="theme-switch__label" htmlFor={ThemeSwitch.SWITCH_CHECKBOX_ID}>
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

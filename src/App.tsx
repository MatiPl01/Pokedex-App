import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar.component";
import ListView from "./views/list/list-view.component";


class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <ListView />
      </div>
    )
  }
}

export default App;

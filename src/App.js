import React, { Component } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import "./styles/css/main.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;

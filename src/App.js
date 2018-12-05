import React, { Component } from "react";
import Header from "./components/Header";
import AuthenticateForm from "./components/AuthenticateForm";
import "./styles/css/main.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AuthenticateForm />
      </div>
    );
  }
}

export default App;

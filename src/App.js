import React, { Component } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/css/main.css";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import AccountFaq from "./components/AccountFaq";
import PreviewCollections from "./components/PreviewCollections";

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

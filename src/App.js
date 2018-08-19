import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Todo from './components/TodoHome'
import APIHome from './containers/API.container'

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/api">API</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={Todo} />
          <Route path="/todo" component={Todo} />
          <Route path="/api" component={APIHome} />
          <Route component={Todo} />
        </Switch>
      </div>
    );
  }
}

export default App;

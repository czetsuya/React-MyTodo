import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Todo from './components/TodoHome'

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
          <Route component={Todo} />
        </Switch>
      </div>
    );
  }
}

export default App;

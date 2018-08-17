import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//filter
import AddTodo from './containers/AddTodo.container'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello PrimeReact</h1>
        <AddTodo></AddTodo>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

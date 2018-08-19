import React from "react";

import AddTodo from '../containers/AddTodo.container'
import Todos from '../containers/Todos.container'
import Footer from './Footer'

const TodoHome = () => (
    <div className="App">
    <h1>Hello PrimeReact</h1>
    <AddTodo></AddTodo>
    <Todos></Todos>
    <br />
    <Footer></Footer>
  </div>
);

export default TodoHome
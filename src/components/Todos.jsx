import React from 'react'
import Todo from './Todo' 

export default class Todos extends React.Component {
    render() {
        const { todos, toggleTodo } = this.props

        return(
            <div>
                {todos.map(todo => 
                    <Todo 
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)} />
                )}
            </div>
        )        
    }
}
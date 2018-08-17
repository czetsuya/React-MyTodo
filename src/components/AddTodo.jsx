import React from 'react'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

export default class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ""
        }

        this.handleAddTodo = this.handleAddTodo.bind(this)
    }

    handleAddTodo(e) {
        e.preventDefault()
        console.log(this.state.todo)
    }

    render() {
        const { onAddTodo } = this.props

        return (
            <div>
                <form>
                    <InputText value={this.state.todo} onChange={e => this.setState({"todo": e.target.value})} />
                    <Button label="Add" onClick={e => this.handleAddTodo(e)} />
                </form>
            </div>
        )
    }
}
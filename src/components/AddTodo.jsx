import React from 'react'
import { connect } from 'react-redux'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

export default class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    handleAddTodo = (e) => {
        e.preventDefault()
        console.log(this.state.todo)
        this.props.onAddTodo(this.state.todo)
    }

    render() {
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
import React from 'react'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

export default class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            txtTodo: ""
        }
    }

    // so we don't require binding
    handleAddTodo = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.txtTodo)
        this.setState({"txtTodo": ''})
    }

    render() {
        return (
            <div>
                <form>
                    <InputText value={this.state.txtTodo} onChange={e => this.setState({"txtTodo": e.target.value})} />
                    <Button label="Add" onClick={e => this.handleAddTodo(e)} />
                </form>
            </div>
        )
    }
}
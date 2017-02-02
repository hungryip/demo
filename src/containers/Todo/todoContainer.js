import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoListActions from '../../actions/todo'

@connect(
    state => state,
    dispatch => bindActionCreators({ ...todoListActions }, dispatch)
)
export default class TodoContainer extends Component {
    render() {
        console.log('todo: ', this.props)
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={(e) => this.props.addTodo(this.refs.input.value)}>Add</button>
                <ul>
                    {this.props.todos.map((todo, index) => <li key={index}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}
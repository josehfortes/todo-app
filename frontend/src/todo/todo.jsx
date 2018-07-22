import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this) //independente de qm chame, this é a classe atual Todo
        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * Manipula a adicao de uma nova tarefa no botao do todoForm
     */
    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou'))
    }

    /**
     * Manipula o onchange do input do todoForm
     */
    handleChange(e){
        this.setState({ ...this.state, description: e.target.value })
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='cadastro' />
                <TodoForm  handleChange={this.handleChange} 
                    description={this.state.description}  handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}
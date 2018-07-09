import React, { Component } from "react"

import AddTodo from "./containers/AddTodoContainer"
import TodoList from "./containers/TodoListContainer"
import Filters from "./containers/FiltersContainer"

class App extends Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <div className="App">
        <h1>Add Todo</h1>
        <AddTodo />
        <h1>Todos</h1>
        <TodoList />
        <br />
        <h1>Filters</h1>
        <Filters />
      </div>
    )
  }
}

export default App

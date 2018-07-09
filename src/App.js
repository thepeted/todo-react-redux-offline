import React, { Component } from "react"
import "./App.css"

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
        <h1>To-Dootrix</h1>
        <div className="App__add-todo">
          <AddTodo />
        </div>
        <TodoList />
        <footer>
          <Filters />
        </footer>
      </div>
    )
  }
}

export default App

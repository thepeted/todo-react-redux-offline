import React, { Component } from "react"
import "./App.css"

import AddTodo from "./containers/AddTodoContainer"
import TodoList from "./containers/TodoListContainer"
import Filters from "./containers/FiltersContainer"
import Status from "./containers/StatusContainer"

class App extends Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="App">
          <h1>To-Dootrix</h1>
          <div className="App__add-todo">
            <AddTodo />
          </div>
          <TodoList />
        </div>
        <div>
          <div className="info">
            <a href="https://github.com/thepeted/todo-react-redux-offline">
              Client side source
            </a>{" "}
            |
            <a href="https://github.com/thepeted/serverless-todo">
              Server side source
            </a>
          </div>
          <footer>
            <Filters />
            <Status />
          </footer>
        </div>
      </div>
    )
  }
}

export default App

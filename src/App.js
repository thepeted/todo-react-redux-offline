import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "./actions/todos"

class App extends Component {
  state = {
    text: ""
  }

  componentDidMount() {
    this.props.getTodos()
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({
      text: ""
    })
  }

  handleInputChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="submit" />
        </form>
        <h1>Todos</h1>
        {this.props.todos.items.map(todo => JSON.stringify(todo))}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({
  todos
})

export default connect(
  mapStateToProps,
  actions
)(App)

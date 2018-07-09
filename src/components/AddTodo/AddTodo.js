import React from "react"
import PropTypes from "prop-types"
import "./AddTodo.css"

class AddTodo extends React.Component {
  state = {
    text: ""
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo

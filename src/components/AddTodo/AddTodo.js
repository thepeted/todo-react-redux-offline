import React from "react"
import PropTypes from "prop-types"
import "./AddTodo.css"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }

    this.textInput = React.createRef()
  }

  componentDidMount() {
    this.textInput.current.focus()
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
      <form className="AddTodo" onSubmit={this.handleSubmit}>
        <input
          ref={this.textInput}
          placeholder="Enter something that needs doing here..."
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo

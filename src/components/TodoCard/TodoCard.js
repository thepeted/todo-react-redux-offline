import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./todo-card.css"

class TodoCard extends React.Component {
  constructor(props) {
    super(props)

    this.setInputRef = element => {
      this.textInput = element
    }
    this.state = {
      isEditing: false,
      inputText: props.text
    }
  }

  toggleEdit = cb => {
    this.setState(
      prevState => ({
        isEditing: !prevState.isEditing
      }),
      cb
    )
  }

  handleTextSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    if (this.state.inputText !== this.props.text) {
      this.props.handleUpdateText(this.state.inputText)
    }
    this.setState({
      isEditing: false
    })
  }

  handleTextDoubleClick = () => {
    const onClickOutside = event => {
      if (event.target !== this.textInput) {
        this.toggleEdit()
        window.document.removeEventListener("click", onClickOutside)
        this.handleTextSubmit()
      }
    }
    this.toggleEdit(() => {
      document.addEventListener("click", onClickOutside)
      this.textInput.focus()
    })
  }

  handleInputChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    const { text, completed, handleComplete, handleDelete, todoId } = this.props
    const { isEditing, inputText } = this.state
    return (
      <div className="TodoCard">
        <div className="TodoCard__check-area">
          <input
            id={`${todoId}_check`}
            type="checkbox"
            disabled={isEditing}
            checked={completed}
            onChange={() => {
              handleComplete(!completed)
            }}
          />
          <label for={`${todoId}_check`} />
        </div>
        <div className="TodoCard__content-area">
          {isEditing ? (
            <form onSubmit={this.handleTextSubmit}>
              <input
                type="text"
                ref={this.setInputRef}
                value={inputText}
                onChange={this.handleInputChange}
              />
            </form>
          ) : (
            <div
              className={classnames("TodoCard__text", { completed })}
              onDoubleClick={this.handleTextDoubleClick}
            >
              {text}
            </div>
          )}
        </div>
        <div className="TodoCard__close-area">
          <div className="TodoCard__delete" onClick={handleDelete} />
        </div>
      </div>
    )
  }
}

TodoCard.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  todoId: PropTypes.string.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdateText: PropTypes.func.isRequired
}

export default TodoCard

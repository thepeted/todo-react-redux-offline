import React from "react"
import PropTypes from "prop-types"
import "./todo-card.css"

const TodoCard = ({ createdDate, text, todoId, completed }) => (
  <div className="TodoCard">
    <div className="TodoCard__check-area">
      <input type="checkbox" checked={completed} />
    </div>
    <div className="TodoCard__content-area">{text}</div>
    <div className="TodoCard__close-area"> X </div>
  </div>
)

TodoCard.propTypes = {
  createdDate: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  todoId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default TodoCard

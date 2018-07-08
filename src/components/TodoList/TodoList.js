import React from "react"
import PropTypes from "prop-types"
import TodoCard from "../TodoCard/TodoCard"
import "./TodoList.css"

const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.todoId}>
        <TodoCard {...todo} />
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList

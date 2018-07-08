import React from "react"
import PropTypes from "prop-types"
import TodoCard from "../TodoCard/TodoCard"
import "./TodoList.css"

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.todoId}>
        <TodoCard
          {...todo}
          handleComplete={completed => updateTodo(todo.todoId, { completed })}
          handleDelete={() => deleteTodo(todo.todoId)}
          handleUpdateText={text => updateTodo(todo.todoId, { text })}
        />
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList

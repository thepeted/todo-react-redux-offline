import { connect } from "react-redux"
import TodoList from "../components/TodoList/TodoList"
import { updateTodo, deleteTodo } from "../actions/todos"

const mapStateToProps = ({ todos }) => {
  let todoItems = todos.items.slice(0)

  if (todos.filterBy === "ACTIVE") {
    todoItems = todoItems.filter(item => !item.completed)
  }

  if (todos.filterBy === "COMPLETED") {
    todoItems = todoItems.filter(item => item.completed)
  }

  return {
    todos: todoItems.slice(0).sort((a, b) => b.createdDate - a.createdDate),
    isFetchingTodos: todos.isFetchingTodos
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  { updateTodo, deleteTodo }
)(TodoList)

export default TodoListContainer

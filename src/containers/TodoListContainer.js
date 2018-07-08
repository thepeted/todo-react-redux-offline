import { connect } from "react-redux"
import TodoList from "../components/TodoList/TodoList"
import { updateTodo, deleteTodo } from "../actions/todos"

const mapStateToProps = ({ todos }) => ({
  todos: todos.items.slice(0).sort((a, b) => b.createdDate - a.createdDate)
})

const TodoListContainer = connect(
  mapStateToProps,
  { updateTodo, deleteTodo }
)(TodoList)

export default TodoListContainer

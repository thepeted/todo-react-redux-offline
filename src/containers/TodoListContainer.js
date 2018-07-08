import { connect } from "react-redux"
import TodoList from "../components/TodoList/TodoList"

const mapStateToProps = ({ todos }) => ({
  todos: todos.items.sort((a, b) => b.createdDate - a.createdDate)
})

const TodoListContainer = connect(mapStateToProps)(TodoList)

export default TodoListContainer

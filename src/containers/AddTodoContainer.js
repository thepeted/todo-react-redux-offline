import { connect } from "react-redux"
import { addTodo } from "../actions/todos"
import AddTodo from "../components/AddTodo/AddTodo"

export default connect(
  null,
  { addTodo }
)(AddTodo)

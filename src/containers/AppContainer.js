import { connect } from "react-redux"
import App from "../App"
import { getTodos } from "../actions/todos"

export default connect(
  null,
  { getTodos }
)(App)

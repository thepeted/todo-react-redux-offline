import { connect } from "react-redux"
import Filters from "../components/Filters/Filters"
import {
  filterByAll,
  filterByCompleted,
  filterByActive
} from "../actions/todos"

const mapStateToProps = ({ todos }) => ({
  selected: todos.filterBy
})

export default connect(
  mapStateToProps,
  { filterByAll, filterByCompleted, filterByActive }
)(Filters)

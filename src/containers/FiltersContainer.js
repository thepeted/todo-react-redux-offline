import { connect } from "react-redux"
import Filters from "../components/Filters/Filters"
import {
  filterByAll,
  filterByCompleted,
  filterByActive
} from "../actions/todos"

export default connect(
  null,
  { filterByAll, filterByCompleted, filterByActive }
)(Filters)

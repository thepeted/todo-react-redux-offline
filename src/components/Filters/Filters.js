import React from "react"
import PropTypes from "prop-types"

const Filters = ({ filterByAll, filterByCompleted, filterByActive }) => (
  <div>
    <button onClick={filterByAll}>ALL</button>
    <button onClick={filterByActive}>Active</button>
    <button onClick={filterByCompleted}>Completed</button>
  </div>
)

Filters.propTypes = {
  filterByAll: PropTypes.func.isRequired,
  filterByCompleted: PropTypes.func.isRequired,
  filterByActive: PropTypes.func.isRequired
}

export default Filters

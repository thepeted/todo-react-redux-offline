import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"

const Filters = ({ filterByAll, filterByCompleted, filterByActive }) => (
  <div>
    <Button selected handleClick={filterByAll}>
      All
    </Button>
    <Button handleClick={filterByActive}>Active</Button>
    <Button handleClick={filterByCompleted}>Completed</Button>
  </div>
)

Filters.propTypes = {
  filterByAll: PropTypes.func.isRequired,
  filterByCompleted: PropTypes.func.isRequired,
  filterByActive: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired
}

export default Filters

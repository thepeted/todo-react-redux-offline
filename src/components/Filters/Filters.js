import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"

const Filters = ({
  filterByAll,
  filterByCompleted,
  filterByActive,
  selected
}) => (
  <div>
    <Button selected={selected === "ALL"} handleClick={filterByAll}>
      All
    </Button>
    <Button selected={selected === "ACTIVE"} handleClick={filterByActive}>
      Active
    </Button>
    <Button selected={selected === "COMPLETED"} handleClick={filterByCompleted}>
      Completed
    </Button>
  </div>
)

Filters.propTypes = {
  filterByAll: PropTypes.func.isRequired,
  filterByCompleted: PropTypes.func.isRequired,
  filterByActive: PropTypes.func.isRequired,
  selected: PropTypes.oneOf(["ALL", "ACTIVE", "COMPLETED"]).isRequired
}

export default Filters

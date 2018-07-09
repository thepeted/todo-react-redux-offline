import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./Button.css"

const Button = ({ children, selected, handleClick }) => (
  <a
    href="#"
    className={classnames("Button", { selected })}
    onClick={handleClick}
  >
    {children}
  </a>
)

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  selected: PropTypes.bool
}

export default Button

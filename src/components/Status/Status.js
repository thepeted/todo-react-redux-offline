import React from "react"
import PropTypes from "prop-types"
import { CubeGrid } from "better-react-spinkit"
import "./Status.css"

const Status = ({ isFetching, online }) => (
  <div className="Status">
    {online ? (
      isFetching && <CubeGrid />
    ) : (
      <span className="Status__offline">OFFLINE</span>
    )}
  </div>
)

Status.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  online: PropTypes.bool.isRequired
}

export default Status

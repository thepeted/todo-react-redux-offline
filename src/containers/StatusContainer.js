import { connect } from "react-redux"
import Status from "../components/Status/Status"

const mapStateToProps = ({ todos, offline }) => ({
  isFetching: todos.isFetchingTodos || offline.outbox.length > 0,
  online: offline.online
})

export default connect(mapStateToProps)(Status)

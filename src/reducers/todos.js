const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "POST_TODO_REQUEST":
      return state.concat(action.payload)
    case "POST_TODO_COMMIT":
    //return state.concat(action.payload.todoId)
    default:
      return state
  }
}

export default todos

const initialState = {
  items: [],
  isFetchingTodos: false,
  isErrorFetchingTodos: false,
  submitting: {}
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "TODOS_FETCH_ERROR":
      return {
        ...state,
        isFetchingTodos: false,
        isErrorFetchingTodos: true
      }
    case "TODOS_FETCH_PENDING":
      return {
        ...state,
        isFetchingTodos: true
      }
    case "SET_TODOS":
      return {
        ...state,
        items: action.payload,
        isFetchingTodos: false
      }
    case "POST_TODO_REQUEST":
      return {
        ...state,
        items: state.items.concat(action.payload)
        // submitting: { ...state.submitting, [action.payload.meta.todoId]: true }
      }
    case "POST_TODO_COMMIT":
    //return state.concat(action.payload.todoId)
    default:
      return state
  }
}

export default todos

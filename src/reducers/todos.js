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
    case "UPDATE_TODO_REQUEST":
      const index = state.items.findIndex(
        item => item.todoId === action.payload.todoId
      )
      if (index < 0) return state
      return {
        ...state,
        items: state.items
          .slice(0, index)
          .concat({ ...state.items[index], ...action.payload })
          .concat(state.items.slice(index + 1))
      }
    case "POST_TODO_REQUEST":
      return {
        ...state,
        items: state.items.concat(action.payload)
        // submitting: { ...state.submitting, [action.payload.meta.todoId]: true }
      }
    default:
      return state
  }
}

export default todos

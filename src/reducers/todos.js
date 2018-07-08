const initialState = {
  items: [],
  isFetchingTodos: false,
  isErrorFetchingTodos: false,
  submitting: {},
  filterBy: "ALL"
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO_FILTER":
      return {
        ...state,
        filterBy: action.payload
      }
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
      const updateIdx = state.items.findIndex(
        item => item.todoId === action.payload.todoId
      )
      if (updateIdx < 0) return state
      return {
        ...state,
        items: state.items
          .slice(0, updateIdx)
          .concat({ ...state.items[updateIdx], ...action.payload })
          .concat(state.items.slice(updateIdx + 1))
      }
    case "DELETE_TODO_REQUEST":
      const deleteIdx = state.items.findIndex(
        item => item.todoId === action.payload
      )
      if (deleteIdx < 0) return state
      return {
        ...state,
        items: state.items
          .slice(0, deleteIdx)
          .concat(state.items.slice(deleteIdx + 1))
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

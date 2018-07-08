import { API_BASE } from "../constants"
import { v1 as uuid } from "uuid"
import axios from "axios"

const setTodoItems = payload => ({
  type: "SET_TODOS",
  payload
})

const todosFetchPending = () => ({
  type: "TODOS_FETCH_PENDING"
})

const errorFetchingTodos = () => ({
  type: "TODOS_FETCH_ERROR"
})

export const getTodos = () => dispatch => {
  dispatch(todosFetchPending())
  axios
    .get(`${API_BASE}/todos`)
    .then(response => {
      dispatch(setTodoItems(response.data))
    })
    .catch(err => {
      console.error(err)
      dispatch(errorFetchingTodos())
    })
}

export const addTodo = text => {
  const todoId = uuid()
  return {
    type: "POST_TODO_REQUEST",
    payload: { text, todoId },
    meta: {
      offline: {
        effect: {
          url: `${API_BASE}/todos`,
          method: "POST",
          body: JSON.stringify({ text, completed: false, todoId })
        },
        commit: { type: "POST_TODO_COMMIT", meta: { todoId } }
      }
    }
  }
}

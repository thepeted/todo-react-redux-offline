import { API_BASE } from "../constants"
import { v1 as uuid } from "uuid"

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

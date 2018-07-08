import { API_BASE } from "../constants"

export const addTodo = (text, todoId = "temp") => ({
  type: "POST_TODO_REQUEST",
  payload: { text },
  meta: {
    offline: {
      effect: {
        url: `${API_BASE}/todos`,
        method: "POST",
        body: JSON.stringify({ text, completed: false })
      },
      commit: { type: "POST_TODO_COMMIT", meta: { todoId } }
    }
  }
})

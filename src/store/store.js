import { createStore } from "redux"

function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.payload.id, title: action.payload.title }]
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

export const store = createStore(reducer)
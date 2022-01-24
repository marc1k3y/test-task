import React, { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"

export default function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state)
  const [todo, setTodo] = useState("")

  function addTodo() {
    if (todos.length >= 10) {
      alert("Max 10 todos, please remove items")
    } else {
      if (todo) {
        dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title: todo } })
        setTodo("")
      } else {
        alert("Enter title")
      }
    }
  }

  function removeTodo(id) {
    dispatch({ type: "REMOVE_TODO", payload: id })
  }

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input
          value={todo}
          onChange={e => setTodo(e.target.value)}
          type="text"
          placeholder="Enter todo title" />
        <button onClick={addTodo}>add</button>
      </form>
      <div>
        {todos.length
          ? todos.map(todo =>
            <div key={todo.id}>
              {todo.title}<button onClick={() => removeTodo(todo.id)}>delete</button>
            </div>)
          : <h2>ToDo list empty</h2>}
      </div>
    </div>
  )
}
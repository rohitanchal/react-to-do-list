import React from 'react'

const ToDoItems = ({todos}) => {
  return (
    <div>

      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button type="button" class="btn btn-sm btn-danger">Delete</button>

    </div>
  )
}

export default ToDoItems

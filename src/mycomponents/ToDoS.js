import React from 'react';
import ToDoItems from "./ToDoItems";

const ToDoS = (props) => {
  return (
    <div className='container'>
      <h3>Todo Lists</h3>
      {/* {props.todos} */}
      <ToDoItems todos={props.todos[0]} />
    </div>
  )
}

export default ToDoS
 
import React from 'react';
import ToDoItems from "./ToDoItems";

const ToDoS = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todo Lists</h3>
      {props.todos.map((todos)=>{
         return  <ToDoItems todos={todos} />
      })}
     
    </div>
  )
}

export default ToDoS
 
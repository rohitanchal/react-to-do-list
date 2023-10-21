import React from 'react';
import ToDoItems from "./ToDoItems";

const ToDoS = (props) => {
  return (

    <div className='container'>

      <h3 className='text-center my-3'>Todo Lists</h3>

      {props.todo.length=== 0 ? "No Todos to Display" :  
      props.todo.map((todo) => {
        return <ToDoItems todo={todo} key={todo.title} onDelete={props.onDelete} />
      })
    }
    
    </div>
  )
}

export default ToDoS

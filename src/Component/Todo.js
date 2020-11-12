import React, { useState } from "react";
import TodoForm from "./TodoForm";

export default function Todo({ todos , completeTodo , removeTodo  , updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id.value);
    setEdit({
      id : null , 
      value : "" ,
    })
  }
  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
          <i class="far fa-times-circle" onClick={() => removeTodo(todo.id)}></i>
          <i class="far fa-edit" onClick={() => setEdit({id : todo.id , value: todo.text})}></i>
          </div>
        </div>
      ))}
    </div>
  );
}

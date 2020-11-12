import React, { useState , useEffect , useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect ( () => {
    inputRef.current.focus();
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000) ,
      text : input , 
    });
    setInput('');
  };
  const handleChange = (event) => {
      setInput(event.target.value);
  }
  return (
    <div>
      <form className="todo_form" onSubmit={handleSubmit}>
        <input
          name="text"
          placeholder="Add A Todo"
          type="text"
          value={input}
          className="todo_input"
          onChange = {handleChange}
          ref = {inputRef}
        />
        <button className="submit-button">Add A Todo</button>
      </form>
    </div>
  );
}

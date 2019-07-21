import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("")

  const [todos, setTodos] = useState([
    { name: "JS Practicing", isDone: false } , 
    { name: "Going Gym", isDone: false },
  ])

  const handleOnchange = e => {
    setNewTodo(e.target.value)
  }

  const handleOnClick = () => {
    setTodos([...todos, { name: newTodo, isDone: false }])
    setNewTodo("")
  }

  const handleDelete = index => {
    setTodos(todos.filter((todo, i) => i != index))
  }

  const handleDone = index => {
    setTodos(todos.map((todo,i) => i === index ? {...todo, isDone: !todo.isDone } : todo))

  }

  return (
    <>
    <div id="myDIV" class="header">
        <h2>My To Do List</h2>
        <input type="text" value={newTodo} onChange={handleOnchange} placeholder="Title..." />
        <button onClick={handleOnClick} disabled={newTodo == ""} class="addBtn">Add</button>
    </div>
    
    <ul id="myUL">
      {todos.map((todo, index) => <li onClick={()=>handleDone(index)} class={todo.isDone ? 'checked' : ''}><span onClick={() => handleDelete(index)} class="close" >×</span>{todo.name}</li>)}
        
        {/* <li class="checked">Going Gym</li> */}
    </ul>  
    </>
  );
}

export default App;


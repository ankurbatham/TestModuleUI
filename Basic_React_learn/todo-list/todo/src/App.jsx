import React from 'react'

function App() {
  let saveTodo = (e)=>{

    let toname = e.target.toname.value;
    alert(toname);
e.preventDefault();
  }
  return (
    <div>
      <h1>Todo-list App</h1>
      <form onSubmit={saveTodo} >
        <input type="text" name='toname' placeholder='Enter your task'/>
      <button>Add</button>
      <button>Delete</button>
      </form>
    </div>
  )
}

export default App

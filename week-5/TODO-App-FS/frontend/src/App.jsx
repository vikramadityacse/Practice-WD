import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateToDo } from './components/CreateToDo'
import {Todos} from './components/Todos'
import './App.css'

function App() {
   const [todos, setTodos] = useState([]);

  // Method 1 (wrong way to do it...still does the job)
   /* fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    })*/
  // goes in infinite loop

  return (
    <div>
      <h1>TO-DO</h1>
      <h3>Never go out of time</h3>
      <CreateToDo></CreateToDo>
      <Todos todos = {todos}></Todos>
    </div> 
  )
}

export default App



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input type='text' placeholder='title'/><br></br>
      <input type="text" placeholder='description' /> <br /><br />
      <button  >Add todo</button>
    </>
  )
}

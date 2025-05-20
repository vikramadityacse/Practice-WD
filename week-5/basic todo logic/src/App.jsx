import { useState } from 'react'
import './App.css'

function App() {

const [todos, setTodos] = useState([{
  title : "Go to class 1",
  time : "6am to 7am",
  completed : false
 
},{

  title : "Go to class 2",
  time : "8am to 10am",
  completed : false

},{

  title : "Go to class 3",
  time : "11am to 4am",
  completed : false

},{

  title : "Go to Gym",
  time : "7pm to 9pm",
  completed : false

}]);

function addTodo(){
  setTodos([...todos, {
    title: " class 4",
    time : "10pm to 11pm",
    completed: false
  }])
}

  return(
    <div>
      <button onClick={addTodo}> Add a todo</button>
      {todos.map(function(todo) {
        return <Todo title = {todo.title} time = {todo.time}/>
      })}
    </div>
  )
}

function Todo(props){
  return {
     <div>
        <h2>{props.title}</h2>
        <h4>{props.time}</h4>
      </div>
 
}

export default App;

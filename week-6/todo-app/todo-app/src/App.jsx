import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function App(){
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:3000/todos")
     .then(function(response){
        setTodos(response.data.todos)
     })
  }, []);

  // useEffect(() => {
  //     fetch("http://localhost:3000/todos")
  //       .then(async function (res) {
  //           const json = await res.json();
  //           setTodos(json.todos);
  //         }
  //       )
  //     }
  // );

  
  return(
    <>
      {todos.map(todo => <Todo  title = {todo.title} description = {todo.description}/>)}
    </>
  )
}

function Todo({title, description}){
  return <div>
     <h3>{title}</h3>
     <h5>{description}</h5>
  </div>
}

 export default App














// let counter =4;
// function App() {
//   const [todos, setTodos] = useState([{
//     id : 1,
//     title : "Gym",
//     description : "go to gym today"
//   },{
//     id : 2,
//     title : "class",
//     description : "finish 2 lectures today"
//   },{
//     id : 3,
//     title : "valorant",
//     description : "reach gold 1 today"
//   }])

//   function addTodo(){
//     setTodos([...todos, {
//       id :counter++,
//       title : Math.random(),
//       description : Math.random()
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//       {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}){

//   return <div>
    
//     <h3>{title}</h3>
//     <h5>{description}</h5>
//   </div>
// }

// export default App

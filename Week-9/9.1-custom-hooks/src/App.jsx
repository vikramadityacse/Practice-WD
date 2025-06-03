import React, {useEffect, useState} from 'react'
import './App.css'


function useDebounce(value, timeout){
  const [debounced, setDebounced] = useState();

  useEffect(()=>{
    let timeoutNumber = setTimeout(()=>{
      setDebounced(value);
    }, timeout)

    return ()=>{
      clearTimeout(timeoutNumber);
    }
  }, [value])

  return debounced;
}

function App(){
  const [value, setValue] = useState(0);
  const debounced = useDebounce(value, 500);

  return (
      <>
        Debounced Value is {debounced}<br/><br/>
        <input type="text" onChange={(e)=>{
          setValue(e.target.value);
        }} />
      </>
  )
}












export default App;





// function useIsOnline(){
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);
//   useEffect(()=>{
//     window.addEventListener("online", ()=>{
//       setIsOnline(true);
//     })

//     window.addEventListener("false", ()=>{
//       setIsOnline(false);
//     })
    
//     return isOnline
//   }, []);

// }

// function App(){

//   const isOnline = useIsOnline();
  
//   if(isOnline){
//     return "you are online yayyy!!!!!!"
//   }
//   return "connect to the internet .  OFFLINE  :("
// }






// // custom hook 
// function useFetchTodos(n){
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState([true]);

//   useEffect((n)=>{
//     setInterval((n)=>{
//       axios.get("https://dummyjson.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//     }, n*1000);

//     axios.get("https://dummyjson.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//     })

//   },[])

//   return {todos, loading};
// }

// function App() {
//   const todos = useFetchTodos(5);

//   if(todos.loading){
//     return <div>loading....</div>
//   }

//   return (
//     <>
//       {todos.todos.map(todo => <Track todo = {todo} />)}   
//     </>
//   )
// }



// function Track({todo}){
//   return <div>
//     {todo.id + ".  "}
//     {todo.todo}<br></br><br/>
//   </div>
// }


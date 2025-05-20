/* Method -1 : Restructing the components

function App() {   
  return (
    <div> 
        <Headerwithbutton/>
        <Header title = "Vikram2"></Header>
        <Header title = "Vikram3"></Header>
        <Header title = "Vikram4"></Header>
        <Header title = "Vikram5"></Header>
    </div>
  )
}

function Headerwithbutton(){
    const [title, setTitle]  = useState("Vikram1")
    function changeTitle(props){
        setTitle("My name is " + Math.random());
    }
    return (
        <div>
            <button onClick={changeTitle} >Click to Change the name</button>
            <Header title = {title}></Header>
        </div>
    )
}

function Header({title}){ // Headers{props}
   return <div>
              {title} 
          </div>
    // {props.title}
}

*/ 
// Method 2 - Using React Memo

import React,{Memo} from "react"
import { useState } from "react"

function App() {  
    const [title, setTitle]  = useState("Vikram1")
   
    function changeTitle(props){
        setTitle("My name is " + Math.random());
    } 
    return (
        <div> 
            <button onClick={changeTitle}>CLick me to change name</button>
            <Header title={title}></Header>
            <Header title = "Vikram2"></Header>
            <Header title = "Vikram3"></Header>
            <Header title = "Vikram4"></Header>
            <Header title = "Vikram5"></Header>
        </div>
  )
}

const Header = React.memo( function Header({title}){ // Headers{props}
   return <div>
              {title} 
          </div>
    // {props.title}
}
)


export default App

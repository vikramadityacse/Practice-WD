
import {useState} from "react";
// state, components


function App() {
  const [count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count+1);
  }

  return (
    <div>
         Counter-app
         <br /><br /><br />
        <CustomButton count = {count} setCount = {setCount}></CustomButton><br /><br />
        <CustomButton count = {count + 100} setCount = {setCount}></CustomButton><br /><br />
        <CustomButton count = {count * 100} setCount = {setCount}></CustomButton><br /><br />
        <CustomButton count = {count + 10} setCount = {setCount}></CustomButton><br /><br />
    </div>
  )
}

//component
function CustomButton(props) { 
  function onClickHandler() { 
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}



export default App

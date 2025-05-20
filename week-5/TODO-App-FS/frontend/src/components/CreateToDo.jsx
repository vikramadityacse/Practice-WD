import { useState } from "react";

export function CreateToDo(){

    // react-query
    // local useState Variables

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    return <div>
        
        <input type="text" placeholder="Title" onChange={(e)=>{
            const value = e.target.value;
            setTitle(e.target.value);
        }}/><br /><br />
        
        <input type="text" placeholder="Description" onChange ={(e)=>{
            const value = e.target.value;
            setDescription(e.target.value);
        }}/><br /><br />
        
        <button onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            }).then(async (res) =>{
                const json = await res.json();
                alert("TO-DO added");
            });
        }}>Add todo</button>

    </div>
}
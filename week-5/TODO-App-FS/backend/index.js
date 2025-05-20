const express = require("express");
const {createTodo} = require("./types");
const {updateTodo} = require("./types"); 
const {todo} = require("./db") 
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173/"
}));

app.get("/todo", async function (req, res){
    const param = req.quiry;
    console.log(param);
    const todos = await todo.find({param})

    res.json({
        todos
    })

})


app.post("/todo", async function(req, res){
    
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if( !parsePayload.success ){
        res.status(411).json({
            msg : "Error Occurred, try again !!"
        });
        return; 
    }
    // Put createPayload in mongoDB
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    }) 
    
    res.json({
        msg  : " To-Do Created"
    })

})

app.get("/todos", async function(req, res){
    const todos = await todo.find({})

    res.json({
        todos
    })

})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parseUpdateload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg  : " Wrong input, give correct input"
        })
    }
    // update in mongoDB
    await todo.updateTodo({
        _id : req.body.id
    }, { 
        completed : true
    })

    res.json({
        msg : "Todo marked as completed"
    })

})

app.listen(3000, ()=>{
    console.log("active")
});
 

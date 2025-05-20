const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vikramadityaw1:Ironman%403000@cluster0.llgf981.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos" , todoSchema);

module.exports = {
    todo
}

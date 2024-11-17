import mongoose from "mongoose"

interface ITodo{
    _id:mongoose.Types.ObjectId,
    name:string,
}

const todoSchema = new mongoose.Schema({
    name:String
})

const Todo = mongoose.models.Todos || mongoose.model("Todos",todoSchema)

export default Todo

export type {ITodo}
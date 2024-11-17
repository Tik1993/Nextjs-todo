import dbConnect from "../dbConnect";
import Todo from "../models/Todo";
import { formatArrayID, IFormattedTodo } from "../utils/format";

export async function getTodos():Promise<IFormattedTodo[]>{
    try {
        await dbConnect()
    } catch (error) {
        console.error(error)
        return []
    }

    try {
        const todos = await Todo.find({})
        return formatArrayID(todos || [])
    } catch (error) {
        console.error(error)
        return []
    }
}

interface ITodoData {
    name:string
}
export async function createTodo(data:ITodoData):Promise<any>{
    try {
        await dbConnect()
    } catch (error) {
        console.error(error)
        return []
    }
    try{
        const newTodo = new Todo(data)
        await newTodo.save()
        // console.log("Todo created")
        
    } catch (error) {
        console.error(error)
        return []
    }

}

export async function deleteTodo(data:{id:string}):Promise<any>{
    try {
        await dbConnect()
    } catch (error) {
        console.error(error)
        return []
    }
    try{
        const result = await Todo.findByIdAndDelete(data.id)
        // console.log(result)
    } catch (error) {
        console.error(error)
        return []
    }
}

interface IUpdateTodoData {
    id:string,
    name:string
}
export async function updateTodo({id,name}:IUpdateTodoData):Promise<any>{
    try {
        await dbConnect()
    } catch (error) {
        console.error(error)
        return []
    }
    try{
        const todo= await Todo.findById(id)
        todo.name=name
        const result = await todo.save()
    } catch (error) {
        console.error(error)
        return []
    }
}
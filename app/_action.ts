"use server"

import { revalidatePath } from "next/cache";
import {z} from "zod"
import {createTodo,deleteTodo,updateTodo} from "@/database/services/data"

export async function createTodoAction( prevState:{message:string},formData:FormData){
    const schema = z.object({
        name:z.string().min(1)
    })

    const parse = schema.safeParse({
        name:formData.get("todo")
    })

    if (!parse.success) {
        return { message: "Failed to create todo" };
      }
    
      const data = parse.data;
    
      try {
        await createTodo(data)
        revalidatePath("/");
        return { message: `Added todo ${data.name}` };
      } catch (e) {
        console.error(e);
        return { message: "Failed to create todo" };
      }
}

export async function deleteTodoAction (prevState:{message:string},formData:FormData){
    const schema = z.object({
        id:z.string().min(1)
    })

    const parse = schema.safeParse({
        id:formData.get("id")
    })
    if (!parse.success) {
        return { message: "Failed to delete todo" };
      }
    
      const data = parse.data;
    
    try {
        await deleteTodo(data)
        revalidatePath("/");
        return { message: `delete todo, id: ${data.id}` };
      } catch (e) {
        console.error(e);
        return { message: "Failed to delete todo" };
      }
}

export async function updateTodoAction(prevState:{message:string},formData:FormData){
    const schema = z.object({
        id:z.string().min(1),
        name:z.string().min(1)
    })

    const parse = schema.safeParse({
        id:formData.get("id"),
        name:formData.get("editItem")

    })
    if (!parse.success) {
        return { message: "Failed to update todo" };
      }
    
      const data = parse.data;
    
    try {
        await updateTodo(data)
        revalidatePath("/");
        return { message: `update todo, id: ${data.id}` };
      } catch (e) {
        console.error(e);
        return { message: "Failed to update todo" };
      }
}
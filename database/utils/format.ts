import { ITodo } from "../models/Todo";

interface IFormattedTodo {
    id: string;
    name: string;
}

function formatArrayID(todos: ITodo[]): IFormattedTodo[] {
  return todos.map((todo) => {
    return {
      id: todo._id.toString(),
        name: todo.name,
    };
  });
}

export {formatArrayID}
export type {IFormattedTodo}
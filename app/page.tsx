import AddForm from "./components/add-form";
import TodoItem from "./components/todoItem";
import { getTodos } from "@/database/services/data";

export default async function Home() {
  const todos = await getTodos();

  return (
    <section className="p-4 flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col gap-2">
        <AddForm />
        <ul className="flex flex-col gap-2 w-full">
          {todos.map((todo) => (
            <TodoItem id={todo.id} name={todo.name} key={todo.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

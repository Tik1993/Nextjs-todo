"use client";
import { useActionState } from "react";
import { createTodoAction } from "../_action";

const form = () => {
  const [state, formAction] = useActionState(createTodoAction, { message: "" });
  const handleAdd = (formData: FormData) => {
    formAction(formData);
  };
  return (
    <form className="flex flex-col gap-4" action={handleAdd}>
      <div className="flex flex-col gap-2">
        <label htmlFor="todo" className=" text-2xl">
          Enter Task:
        </label>

        <input
          type="text"
          className="input input-bordered"
          id="todo"
          name="todo"
        ></input>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        {" "}
        Add{" "}
      </button>
      <p className="text-red-500">{state?.message}</p>
    </form>
  );
};

export default form;

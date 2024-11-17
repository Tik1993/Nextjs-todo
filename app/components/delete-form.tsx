"use client";
import { useActionState } from "react";
import { deleteTodoAction } from "../_action";

const Form = ({ id }: { id: string }) => {
  const [state, formAction] = useActionState(deleteTodoAction, { message: "" });
  const handleDelete = (formData: FormData) => {
    formAction(formData);
  };
  return (
    <form action={handleDelete}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-secondary">Delete</button>
    </form>
  );
};

export default Form;

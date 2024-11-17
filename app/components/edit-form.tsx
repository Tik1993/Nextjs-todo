"use client";
import { Dispatch, SetStateAction, useActionState } from "react";
import { updateTodoAction } from "../_action";
import { set } from "mongoose";

interface formProp {
  id: string;
  name: string;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}
const form = ({ id, name, setIsEdit }: formProp) => {
  const [state, formAction] = useActionState(updateTodoAction, { message: "" });
  const handleUpdate = (formData: FormData) => {
    formAction(formData);
    setIsEdit(false);
  };

  return (
    <form action={handleUpdate}>
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        className="input input-bordered bg-slate-100"
        id="editItem"
        name="editItem"
        defaultValue={name}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default form;

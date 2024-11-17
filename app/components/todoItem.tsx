"use client";
import { useState } from "react";
import DeleteForm from "./delete-form";
import EditForm from "./edit-form";

interface itemProp {
  id: string;
  name: string;
}
const TodoItem = ({ id, name }: itemProp) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <li
      key={id}
      className="p-2 border bg-white flex items-center justify-between text-black"
    >
      {isEdit ? <EditForm id={id} name={name} setIsEdit={setIsEdit} /> : name}
      <DeleteForm id={id} />
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsEdit(!isEdit);
        }}
      >
        Edit
      </button>
    </li>
  );
};

export default TodoItem;

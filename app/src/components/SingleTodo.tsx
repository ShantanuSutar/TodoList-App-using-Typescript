import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, todo: editTodo } : todo;
    });

    setTodos(updatedTodos);
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="list-none flex gap-8 min-w-[30%]   rounded-md py-5 mt-4 shadow-2xl text-2xl text-center max-w-full items-center  justify-between px-8 text-gray-800 flex-wrap hover:scale-105 cursor-pointer transition-all bg-gray-100"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          className="  bg-transparent  rounded-md   outline-none border p-1 border-black mx-auto max-w-full w-[content] text-wrap h-auto "
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <span
          className={` mx-auto max-w-full w-[content] text-wrap h-auto ${
            todo.isDone ? "line-through" : ""
          } `}
          onClick={() => handleDone(todo.id)}
        >
          {todo.todo}
        </span>
      )}
      <div className=" flex gap-3">
        <span className=" hover:-translate-y-1 hover:cursor-pointer transition-all">
          <AiFillEdit
            className=" hover:opacity-80"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit((prev) => !prev);
              }
            }}
          />
        </span>
        <span
          className=" hover:-translate-y-1 hover:cursor-pointer transition-all"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete className=" hover:opacity-80" />
        </span>
        <span
          className=" hover:-translate-y-1 hover:cursor-pointer transition-all"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone className=" hover:opacity-80" />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

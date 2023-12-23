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
  return (
    <form className="list-none flex gap-8 min-w-[30%]   rounded-md py-5 mt-4 shadow-2xl text-2xl text-center max-w-full items-center  justify-between px-8 text-gray-800 flex-wrap hover:scale-105 cursor-pointer transition-all bg-gray-100">
      <span
        className={` mx-auto max-w-full w-[content] text-wrap h-auto ${
          todo.isDone ? "line-through" : ""
        } `}
      >
        {todo.todo}
      </span>
      <div className=" flex gap-3">
        <span className=" hover:-translate-y-1 hover:cursor-pointer transition-all">
          <AiFillEdit className=" hover:opacity-80" />
        </span>
        <span className=" hover:-translate-y-1 hover:cursor-pointer transition-all">
          <AiFillDelete className=" hover:opacity-80" />
        </span>
        <span className=" hover:-translate-y-1 hover:cursor-pointer transition-all">
          <MdDone className=" hover:opacity-80" />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

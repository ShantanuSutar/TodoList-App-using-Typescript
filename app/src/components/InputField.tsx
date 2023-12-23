import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form
      className=" flex w-[90%] relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        className=" w-full scale-95 focus:scale-100 rounded-full py-5 px-7 text-2xl border-none shadow-inner transition-all focus:outline-none  focus:shadow-2xl "
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        placeholder="What's the task ?"
        value={todo}
      />
      <button
        className=" absolute w-12 h-12 m-3 rounded-full  right-[3%] border-none text-base bg-gray-500 text-white transition-all  scale-100 hover:scale-105 hover:bg-gray-400"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;

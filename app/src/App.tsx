import { useState } from "react";
import "./App.css";
import { Todo } from "./model";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className=" w-screen min-h-screen flex flex-col items-center bg-gray-200 pb-8">
      {/* Header goes here */}
      <h1 className="   text-4xl my-7 mx-0 text-gray-600 z-10  text-center">
        taskMaster
      </h1>

      {/* Inputs go here */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      {/* Todos go here */}
    </div>
  );
};
export default App;

import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

interface ITodos {
  text: string;
  complete: boolean;
}
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  const addTodo = (text: string): void => {
    const newTodos: ITodos[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodos[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodos[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Todo List </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />

        <button type="submit"> Add Todo </button>
      </form>
      <section>
        {todos.map((todo: ITodos, index: number) => (
          <Fragment key={index}>
            <h2>{todo.text}</h2>
            <button type="submit" onClick={() => completeTodo(index)}>
              {todo.complete ? "Incomplete" : "complete"}
            </button>
            <button type="submit" onClick={() => removeTodo(index)}>
              &times;
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

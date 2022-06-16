import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setValue("");
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
        <h2>{value}</h2>
      </form>
    </Fragment>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

import { useState } from "react";

function TodoForms(props) {
  const { addTodo } = props;

  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText(""); //change todo forms ,/clear input text
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForms;

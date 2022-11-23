import { useState } from "react";
import styles from "./TodoForm.module.css";

console.log(styles);

function TodoForms(props) {
  const { addTodo } = props;

  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText(""); //change todo forms ,/clear input text
  };
  return (
    <div className={styles.TodoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForms;

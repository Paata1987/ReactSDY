import { useState } from "react";
import Button from "../UI/Button";
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
        <Button
          type="submit"
          title="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForms;

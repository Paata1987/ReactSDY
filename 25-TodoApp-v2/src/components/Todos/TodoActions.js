import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodoActions.module.css";
import Button from "../UI/Button";

function TodoActions(props) {
  const { resetTodos, deleteComplitedtTodos, complitedtTodosExist } = props;
  //console.log(!complitedtTodosExist);
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="reset todos"
        onClick={resetTodos}
      >
        <RiRefreshLine />
      </Button>
      <Button
        title="clear complited todos"
        onClick={deleteComplitedtTodos}
        disabled={!complitedtTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodoActions;

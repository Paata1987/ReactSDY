import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const { todos, deleteTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          index={index}
        />
      ))}
    </div>
  );
}

export default TodoList;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForms from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    //wedelete 1 element from array
    //todo variable we can change with underscore ("_") =>(if we not use todo)
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForms addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
      />
    </div>
  );
}

export default App;

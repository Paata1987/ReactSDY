import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoActions from "./components/Todos/TodoActions";
import TodoForms from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
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

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  //clear application state
  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCoplitedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const complitedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  //console.log(!!complitedTodosCount);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForms addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodoActions
          complitedtTodosExist={!!complitedTodosCount}
          resetTodos={resetTodoHandler}
          deleteComplitedtTodos={deleteCoplitedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {complitedTodosCount > 0 && (
        <h2>{`you have completed ${complitedTodosCount} ${
          complitedTodosCount > 1 ? "todos" : "todo"
        }`}</h2>
      )}
    </div>
  );
}

export default App;

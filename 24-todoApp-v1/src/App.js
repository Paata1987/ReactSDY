import "./App.css";
import TodoForms from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForms />
      <TodoList />
    </div>
  );
}

export default App;

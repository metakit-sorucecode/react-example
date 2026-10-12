import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoFilter from "./TodoFilter.jsx";
import TodoList from "./TodoList.jsx";
import "../../App.css";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "React 3장 복습하기", isDone: true },
    { id: 2, text: "도서관 예제 다시 만들어 보기", isDone: false },
    { id: 3, text: "useState 정리하기", isDone: false },
  ]);
  const [nextId, setNextId] = useState(4);
  const [filter, setFilter] = useState("all");

  const doneCount = todos.filter((todo) => todo.isDone).length;
  const leftCount = todos.length - doneCount;
  const shownTodos = todos.filter((todo) => {
    if (filter === "todo") {
      return !todo.isDone;
    }
    if (filter === "done") {
      return todo.isDone;
    }
    return true;
  });

  function handleAdd(text) {
    setTodos([...todos, { id: nextId, text: text, isDone: false }]);
    setNextId(nextId + 1);
  }

  function handleToggle(todoId) {
    setTodos(
      todos.map((todo) => (todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo))
    );
  }

  function handleDelete(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function handleFilter(value) {
    setFilter(value);
  }

  return (
    <div>
      <h1>오늘의 할 일</h1>
      <p>
        남은 일 {leftCount}개 · 완료 {doneCount}개
      </p>
      <hr />
      <TodoForm onAdd={handleAdd} />
      <TodoFilter filter={filter} onFilter={handleFilter} />
      <TodoList todos={shownTodos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default TodoApp;

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div>
      {todos.length === 0 && <p>할 일이 없습니다.</p>}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            <input type="checkbox" checked={todo.isDone} onChange={() => onToggle(todo.id)} />
            <span className={todo.isDone ? "todo-text done" : "todo-text"}>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

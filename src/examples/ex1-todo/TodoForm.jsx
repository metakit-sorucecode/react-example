import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    onAdd(text.trim());
    setText("");
  }

  return (
    <form className="row" onSubmit={handleSubmit}>
      <strong>할 일</strong>
      <input value={text} onChange={handleChange} placeholder="할 일을 입력하세요" />
      <button>추가</button>
    </form>
  );
}

export default TodoForm;

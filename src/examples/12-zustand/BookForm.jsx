import { useState } from "react";

function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "") {
      return;
    }
    onAdd(title.trim(), author.trim());
    setTitle("");
    setAuthor("");
  }

  return (
    <form className="row" onSubmit={handleSubmit}>
      <strong>도서 등록</strong>
      <input value={title} onChange={handleTitleChange} placeholder="제목" />
      <input value={author} onChange={handleAuthorChange} placeholder="저자" />
      <button>등록</button>
    </form>
  );
}

export default BookForm;

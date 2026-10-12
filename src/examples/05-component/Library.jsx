import { useState } from "react";
import BookForm from "./BookForm.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterBar from "./FilterBar.jsx";
import BookList from "./BookList.jsx";
import "../../App.css";

function Library() {
  const [books, setBooks] = useState([
    { id: 1, title: "자바스크립트 첫걸음", author: "김코딩", isBorrowed: false },
    { id: 2, title: "React 시작하기", author: "이리액트", isBorrowed: true },
    { id: 3, title: "어린 왕자", author: "생텍쥐페리", isBorrowed: false },
    { id: 4, title: "데미안", author: "헤르만 헤세", isBorrowed: true },
  ]);
  const [nextId, setNextId] = useState(5);
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState("all");

  const availableCount = books.filter((book) => !book.isBorrowed).length;
  const searchedBooks = books.filter((book) => book.title.includes(keyword));
  const foundBooks = searchedBooks.filter((book) => {
    if (filter === "returned") {
      return !book.isBorrowed;
    }
    if (filter === "borrowed") {
      return book.isBorrowed;
    }
    return true;
  });

  function handleAdd(title, author) {
    setBooks([...books, { id: nextId, title: title, author: author, isBorrowed: false }]);
    setNextId(nextId + 1);
  }

  function handleToggle(bookId) {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, isBorrowed: !book.isBorrowed } : book
      )
    );
  }

  function handleSearch(text) {
    setKeyword(text);
  }

  function handleFilter(value) {
    setFilter(value);
  }

  return (
    <div>
      <h1>코딩 도서관</h1>
      <p>
        전체 {books.length}권 · 대출 가능 {availableCount}권
      </p>
      <hr />
      <BookForm onAdd={handleAdd} />
      <SearchBar keyword={keyword} onSearch={handleSearch} />
      <FilterBar filter={filter} onFilter={handleFilter} />
      <BookList books={foundBooks} onToggle={handleToggle} />
    </div>
  );
}

export default Library;

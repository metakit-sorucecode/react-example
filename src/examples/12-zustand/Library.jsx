import { useState } from "react";
import { useBookStore } from "./store.js";
import BookForm from "./BookForm.jsx";
import SearchBar from "./SearchBar.jsx";
import FilterBar from "./FilterBar.jsx";
import BookList from "./BookList.jsx";

function Library() {
  // 책 목록은 내 정보 페이지도 쓰므로 스토어에서 꺼낸다
  const books = useBookStore((state) => state.books);
  const addBook = useBookStore((state) => state.addBook);
  const toggleBook = useBookStore((state) => state.toggleBook);

  // 검색어와 필터는 이 페이지에서만 쓰므로 useState로 둔다
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
      <BookForm onAdd={addBook} />
      <SearchBar keyword={keyword} onSearch={handleSearch} />
      <FilterBar filter={filter} onFilter={handleFilter} />
      <BookList books={foundBooks} onToggle={toggleBook} />
    </div>
  );
}

export default Library;

import { useState } from "react";
import "../../App.css";

function Library() {
  const [books, setBooks] = useState([
    { id: 1, title: "자바스크립트 첫걸음", author: "김코딩", isBorrowed: false },
    { id: 2, title: "React 시작하기", author: "이리액트", isBorrowed: true },
    { id: 3, title: "어린 왕자", author: "생텍쥐페리", isBorrowed: false },
    { id: 4, title: "데미안", author: "헤르만 헤세", isBorrowed: true },
  ]);
  const [keyword, setKeyword] = useState("");

  const availableCount = books.filter((book) => !book.isBorrowed).length;
  const foundBooks = books.filter((book) => book.title.includes(keyword));

  function handleSearchChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div>
      <h1>코딩 도서관</h1>
      <p>
        전체 {books.length}권 · 대출 가능 {availableCount}권
      </p>
      <hr />

      <div className="row">
        <label htmlFor="keyword">
          <strong>검색</strong>
        </label>
        <input id="keyword" onChange={handleSearchChange} placeholder="책 제목" />
      </div>

      {foundBooks.length === 0 && <p>찾는 책이 없습니다.</p>}

      <ul className="book-list">
        {foundBooks.map((book) => (
          <li className="book">
            <strong>{book.title}</strong>
            <p>{book.author} · {book.isBorrowed ? "대출 중" : "대출 가능"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Library;

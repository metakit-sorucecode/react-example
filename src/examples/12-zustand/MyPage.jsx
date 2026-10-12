import { useBookStore } from "./store.js";

function MyPage() {
  const books = useBookStore((state) => state.books);
  const toggleBook = useBookStore((state) => state.toggleBook);

  const myBooks = books.filter((book) => book.isBorrowed);

  return (
    <div>
      <h1>내 정보</h1>
      <p>대출한 책 {myBooks.length}권</p>
      <hr />
      {myBooks.length === 0 && <p>대출한 책이 없습니다.</p>}
      <ul className="book-list">
        {myBooks.map((book) => (
          <li key={book.id} className="book">
            <strong>{book.title}</strong>
            <p>{book.author}</p>
            <button onClick={() => toggleBook(book.id)}>반납</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPage;

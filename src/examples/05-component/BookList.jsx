function BookList({ books, onToggle }) {
  return (
    <div>
      {books.length === 0 && <p>찾는 책이 없습니다.</p>}
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book">
            <strong>{book.title}</strong>
            <p>
              {book.author} · {book.isBorrowed ? "대출 중" : "대출 가능"}
            </p>
            <button onClick={() => onToggle(book.id)}>
              {book.isBorrowed ? "반납" : "대출"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

function BookCard({ book, onAddCart }) {
  return (
    <li className="book">
      <strong>{book.title}</strong>
      <p>
        {book.author} · {book.isBorrowed ? "대출 중" : "대출 가능"}
      </p>
      <button onClick={() => onAddCart(book)} disabled={book.isBorrowed}>
        담기
      </button>
    </li>
  );
}

export default BookCard;

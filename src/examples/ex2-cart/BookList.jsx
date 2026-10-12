import BookCard from "./BookCard.jsx";

function BookList({ books, onAddCart }) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onAddCart={onAddCart} />
      ))}
    </ul>
  );
}

export default BookList;

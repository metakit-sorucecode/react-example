import BookList from "./BookList.jsx";

function ShelfPanel({ books, onAddCart }) {
  return (
    <div>
      <h2>서가</h2>
      <BookList books={books} onAddCart={onAddCart} />
    </div>
  );
}

export default ShelfPanel;

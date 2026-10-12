function CartList({ cart }) {
  return (
    <div>
      {cart.length === 0 && <p>담은 책이 없습니다.</p>}
      <ul>
        {cart.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;

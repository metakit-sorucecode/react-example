import { useState } from "react";
import CartPanel from "./CartPanel.jsx";
import ShelfPanel from "./ShelfPanel.jsx";
import "../../App.css";

// 이 실습에서는 책 목록이 바뀌지 않는다
const books = [
  { id: 1, title: "자바스크립트 첫걸음", author: "김코딩", isBorrowed: false },
  { id: 2, title: "React 시작하기", author: "이리액트", isBorrowed: true },
  { id: 3, title: "어린 왕자", author: "생텍쥐페리", isBorrowed: false },
  { id: 4, title: "데미안", author: "헤르만 헤세", isBorrowed: true },
];

function Cart() {
  const [cart, setCart] = useState([]);

  function handleAddCart(book) {
    const isInCart = cart.some((item) => item.id === book.id);
    if (isInCart) {
      return;
    }
    setCart([...cart, book]);
  }

  return (
    <div>
      <h1>코딩 장바구니</h1>
      <hr />
      <CartPanel cart={cart} />
      <hr />
      <ShelfPanel books={books} onAddCart={handleAddCart} />
    </div>
  );
}

export default Cart;

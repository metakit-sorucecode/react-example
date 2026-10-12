import CartList from "./CartList.jsx";

function CartPanel({ cart }) {
  return (
    <div>
      <h2>장바구니</h2>
      <CartList cart={cart} />
    </div>
  );
}

export default CartPanel;

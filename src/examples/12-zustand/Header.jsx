import { NavLink } from "react-router-dom";
import { useBookStore } from "./store.js";

function Header() {
  const books = useBookStore((state) => state.books);
  const myCount = books.filter((book) => book.isBorrowed).length;

  return (
    <div className="row">
      <NavLink to="/" className={({ isActive }) => (isActive ? "selected" : "")}>
        도서관
      </NavLink>
      <NavLink to="/my" className={({ isActive }) => (isActive ? "selected" : "")}>
        내 정보 ({myCount}권)
      </NavLink>
    </div>
  );
}

export default Header;

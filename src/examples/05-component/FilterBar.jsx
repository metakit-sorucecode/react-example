function FilterBar({ filter, onFilter }) {
  return (
    <div className="row">
      <strong>보기</strong>{" "}
      <button className={filter === "all" ? "selected" : ""} onClick={() => onFilter("all")}>
        전체
      </button>{" "}
      <button className={filter === "returned" ? "selected" : ""} onClick={() => onFilter("returned")}>
        반납만 보기
      </button>{" "}
      <button className={filter === "borrowed" ? "selected" : ""} onClick={() => onFilter("borrowed")}>
        대출만 보기
      </button>
    </div>
  );
}

export default FilterBar;

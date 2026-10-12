function TodoFilter({ filter, onFilter }) {
  return (
    <div className="row">
      <strong>보기</strong>
      <button className={filter === "all" ? "selected" : ""} onClick={() => onFilter("all")}>
        전체
      </button>
      <button className={filter === "todo" ? "selected" : ""} onClick={() => onFilter("todo")}>
        할 일
      </button>
      <button className={filter === "done" ? "selected" : ""} onClick={() => onFilter("done")}>
        완료
      </button>
    </div>
  );
}

export default TodoFilter;

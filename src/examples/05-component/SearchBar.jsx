function SearchBar({ keyword, onSearch }) {
  function handleChange(e) {
    onSearch(e.target.value);
  }

  return (
    <div className="row">
      <label htmlFor="keyword">
        <strong>검색</strong>
      </label>
      <input id="keyword" value={keyword} onChange={handleChange} placeholder="책 제목" />
    </div>
  );
}

export default SearchBar;

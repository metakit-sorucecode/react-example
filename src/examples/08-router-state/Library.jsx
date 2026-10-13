import { useNavigate } from "react-router-dom";

// 5장 도서관 모양만 빌린 화면이다. 회원 버튼 말고는 눌러도 반응하지 않는다
const books = [
  { id: 1, title: "자바스크립트 첫걸음", author: "김코딩", isBorrowed: false },
  { id: 2, title: "React 시작하기", author: "이리액트", isBorrowed: true },
  { id: 3, title: "어린 왕자", author: "생텍쥐페리", isBorrowed: false },
  { id: 4, title: "데미안", author: "헤르만 헤세", isBorrowed: true },
];

function Library({ memberCount }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="row">
        <button onClick={() => navigate("/join")}>회원등록</button>
        <button onClick={() => navigate("/members")}>
          회원 목록 ({memberCount}명)
        </button>
      </div>
      <h1>코딩 도서관</h1>
      <p>전체 4권 · 대출 가능 2권</p>
      <hr />
      <div className="row">
        <strong>도서 등록</strong>
        <input placeholder="제목" />
        <input placeholder="저자" />
        <button>등록</button>
      </div>
      <div className="row">
        <strong>검색</strong>
        <input placeholder="책 제목" />
      </div>
      <div className="row">
        <strong>보기</strong>
        <button className="selected">전체</button>
        <button>반납만 보기</button>
        <button>대출만 보기</button>
      </div>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book">
            <strong>{book.title}</strong>
            <p>
              {book.author} · {book.isBorrowed ? "대출 중" : "대출 가능"}
            </p>
            <button>{book.isBorrowed ? "반납" : "대출"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Library;

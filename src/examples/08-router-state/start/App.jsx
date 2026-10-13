// 실습 시작 파일: src/App.jsx에 붙여 넣고 아래 import를 "./App.css"로 바꾼다
// 화면 3개가 위아래로 그려져 있다. 아직 아무 버튼도 동작하지 않는다
import "../../../App.css";

const books = [
  { id: 1, title: "자바스크립트 첫걸음", author: "김코딩", isBorrowed: false },
  { id: 2, title: "React 시작하기", author: "이리액트", isBorrowed: true },
  { id: 3, title: "어린 왕자", author: "생텍쥐페리", isBorrowed: false },
  { id: 4, title: "데미안", author: "헤르만 헤세", isBorrowed: true },
];

function App() {
  return (
    <div>
      {/* 도서관 화면 (주소 /) */}
      <div>
        <div className="row">
          <button>회원등록</button>
          <button>회원 목록 (0명)</button>
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

      <hr />

      {/* 회원등록 화면 (주소 /join) */}
      <div>
        <h1>회원등록</h1>
        <p>도서관 회원 정보를 적어 주세요.</p>
        <hr />
        <form>
          <div className="row">
            <strong>이름</strong>
            <input required placeholder="홍길동" />
          </div>
          <div className="row">
            <strong>전화번호</strong>
            <input type="tel" required placeholder="010-1234-5678" />
          </div>
          <div className="row">
            <strong>회원 종류</strong>
            <label>
              <input type="radio" defaultChecked /> 학생
            </label>
            <label>
              <input type="radio" /> 일반
            </label>
          </div>
          <div className="row">
            <strong>관심 분야</strong>
            <label>
              <input type="checkbox" /> 소설
            </label>
            <label>
              <input type="checkbox" /> IT
            </label>
            <label>
              <input type="checkbox" /> 역사
            </label>
          </div>
          <div className="row">
            <strong>문자 알림</strong>
            <label>
              <input type="checkbox" /> 받기
            </label>
          </div>
          <div className="row">
            <button>등록</button>
            <button type="button">취소</button>
          </div>
        </form>
      </div>

      <hr />

      {/* 회원 목록 화면 (주소 /members) */}
      <div>
        <h1>회원 목록</h1>
        <p>등록한 회원 1명</p>
        <hr />
        <div className="row">
          <button>도서관으로</button>
          <button>회원등록</button>
        </div>
        <ul className="book-list">
          <li className="book">
            <strong>민수 · 학생</strong>
            <p>010-1234-5678 · 관심: 소설, IT · 문자 알림 받음</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

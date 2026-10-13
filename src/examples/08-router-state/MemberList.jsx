import { useNavigate } from "react-router-dom";

function MemberList({ members }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>회원 목록</h1>
      <p>등록한 회원 {members.length}명</p>
      <hr />
      <div className="row">
        <button onClick={() => navigate("/")}>도서관으로</button>
        <button onClick={() => navigate("/join")}>회원등록</button>
      </div>
      {members.length === 0 && <p>등록한 회원이 없습니다.</p>}
      <ul className="book-list">
        {members.map((member) => (
          <li key={member.id} className="book">
            <strong>
              {member.name} · {member.type}
            </strong>
            <p>
              {member.phone} · 관심:{" "}
              {member.genres.length === 0 ? "없음" : member.genres.join(", ")} ·
              문자 알림 {member.sms ? "받음" : "안 받음"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberList;

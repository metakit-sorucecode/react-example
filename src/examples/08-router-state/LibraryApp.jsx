import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./Library.jsx";
import MemberForm from "./MemberForm.jsx";
import MemberList from "./MemberList.jsx";
import "../../App.css";

function LibraryApp() {
  // 회원 목록은 세 페이지가 함께 쓰므로 Routes 위에 둔다
  // 페이지 안에 두면 다른 페이지로 옮길 때 사라진다
  const [members, setMembers] = useState([]);
  const [nextId, setNextId] = useState(1);

  function handleJoin(member) {
    setMembers([...members, { ...member, id: nextId }]);
    setNextId(nextId + 1);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library memberCount={members.length} />} />
        <Route path="/join" element={<MemberForm onJoin={handleJoin} />} />
        <Route path="/members" element={<MemberList members={members} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default LibraryApp;

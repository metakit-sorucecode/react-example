import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Library from "./Library.jsx";
import MyPage from "./MyPage.jsx";
import "../../App.css";

function LibraryApp() {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default LibraryApp;

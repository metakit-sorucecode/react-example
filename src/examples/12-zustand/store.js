import { create } from "zustand";

// 상태와 상태를 바꾸는 함수를 한곳에 모은 스토어
export const useBookStore = create((set) => ({
  // 처음에는 모두 대출 가능이다. 대출 중인 책 = 내가 빌린 책
  books: [
    { id: 1, title: "자바스크립트 첫걸음", author: "김코딩", isBorrowed: false },
    { id: 2, title: "React 시작하기", author: "이리액트", isBorrowed: false },
    { id: 3, title: "어린 왕자", author: "생텍쥐페리", isBorrowed: false },
    { id: 4, title: "데미안", author: "헤르만 헤세", isBorrowed: false },
  ],

  // 책을 지우는 기능이 없어서 길이 + 1이 새 번호가 된다
  addBook: (title, author) =>
    set((state) => ({
      books: [
        ...state.books,
        { id: state.books.length + 1, title: title, author: author, isBorrowed: false },
      ],
    })),

  toggleBook: (bookId) =>
    set((state) => ({
      books: state.books.map((book) =>
        book.id === bookId ? { ...book, isBorrowed: !book.isBorrowed } : book
      ),
    })),
}));

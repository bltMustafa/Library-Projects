import { useState } from "react";
import "../style/BookList.css";

import BookItem from "./BookItem";
import BookOverlay from "./BookOverlay";

function BookList({ books }: { books: string[] }) {
  // * It stores a boolean value that controls whether to display book details.
  const [show, setShow] = useState<boolean>(false);
  // * It is used to determine which book's details will be displayed
  const [selectedBook, setSelectedBook] = useState<string>("");

  // * "openOverlay " function open the BookOverlay
  const openOverlay = (book: string) => {
    setSelectedBook(book);
    setShow(true);
  };

  // * "closeOverlay" function closes the open "BookOverlay" component
  const closeOverlay = () => {
    setSelectedBook("");
    setShow(false);
  };

  return (
    <>
      <div className="card">
        {books.map((book, key) => (
          <div className="card" key={key} onClick={() => openOverlay(book)}>
            <BookItem book={book} />
          </div>
        ))}
      </div>
      <BookOverlay book={selectedBook} show={show} onClose={closeOverlay} />
    </>
  );
}

export default BookList;

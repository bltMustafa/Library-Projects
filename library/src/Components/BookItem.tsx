import { useState } from "react";

import { BookmarkAdd } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { Book } from "../utils/type";
import axios from "axios";

import "../style/BookItem.css";

function BookItem({
  book,
  isFavorite,
}: {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  book?: any;
  isFavorite?: boolean | undefined;
  handleFavoriteClick?: (book: Book) => Promise<void>;
}) {
  // * Book status: Has it been added to favorites or not?
  const [isBookmarked, setIsBookmarked] = useState(isFavorite);

  // * Adding books to favorites
  const handleFavoriteClick = async (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsBookmarked(!isBookmarked);

    if (typeof book !== "string" && book.volumeInfo) {
      const title = book.volumeInfo.title;
      const thumbnail = book.volumeInfo.imageLinks?.thumbnail;

      if (title && thumbnail) {
        try {
          const favoriteBook = {
            title,
            thumbnail,
          };
          const response = await axios.post(
            "http://localhost:2080/api/v1/favoriteBooks",
            favoriteBook
          );
          console.log("The book has been added to favorites.", response.data);
        } catch (error) {
          console.error("An error occurred while adding the book.", error);
        }
      }
    }
  };

  return (
    <>
      <div className="book-card">
        <div>
          {typeof book === "string" ? (
            <h5>{book}</h5>
          ) : (
            <>
              {book.volumeInfo && book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              )}
              <h5>{book.volumeInfo?.title}</h5>
              <button onClick={handleFavoriteClick} className="favorite-button">
                {isBookmarked ? <BookmarkAdd /> : <BookmarkBorderIcon />}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BookItem;

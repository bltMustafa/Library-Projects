import axios from "axios";
import { useState, useEffect, Suspense } from "react";

import { Book } from "@mui/icons-material";
import BookmarkRemove from "@mui/icons-material/BookmarkRemove";

interface Book {
  title: string;
  thumbnail: string;
  id: string;
}

function FavoriteBook() {
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFavoriteBooks();
  }, []);
  // * Data retrieval for fetching favorite books
  const fetchFavoriteBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2080/api/v1/favoriteBooks"
      );
      if (response.status === 200) {
        const favoriteBooksData = response.data.favoriteBooks;

        setFavoriteBooks(favoriteBooksData);
        setLoading(false);
      } else {
        console.error("An error occurred while fetching favorite books");
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred while fetching favorite books:", error);
      setLoading(false);
    }
  };

  // * Book Deletion Function
  const handleDeleteClick = async (bookId: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:2080/api/v1/favoriteBooks/${bookId}`
      );
      console.log("Silmeden Önce :", favoriteBooks);
      if (response.status === 204) {
        setFavoriteBooks((prevFavoriteBooks) =>
          prevFavoriteBooks.filter((book) => book.id !== bookId)
        );
        console.log("Sildikten sonra : ", favoriteBooks);
      } else {
        console.error("An error occurred while deleting the book.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the book.", error);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="container">
        <h1>Favorites Books</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="card">
            {favoriteBooks.map((book) => (
              <div className="book-card" key={book.id}>
                <h5>{book.title}</h5>
                <img src={book.thumbnail} alt={book.title} />

                <button
                  onClick={() => handleDeleteClick(book.id)}
                  className="remove-button"
                >
                  <BookmarkRemove />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Suspense>
  );
}

// * Loading Function
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default FavoriteBook;

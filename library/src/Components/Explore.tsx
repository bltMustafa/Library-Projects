import { useEffect, useState } from "react";
import axios from "axios";

import "../style/Explore.css";
import { Book } from "../utils/type";
import BookItem from "./BookItem";

function Explore() {
  const [magazinData, setMagazinData] = useState<Book[]>([]);
  const [travelData, setTravelData] = useState<Book[]>([]);
  const [selfImprovementData, setSelfImprovementData] = useState<Book[]>([]);

  const API_KEY = "AIzaSyBfvcfm0g1JIZNKGay2q2qifZULH9cR1E4";

  const fetchMagazinData = async () => {
    // * Request GOOGLE API
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=${API_KEY}&maxResults=5`
      );
      const magazinData = response.data.items;
      setMagazinData(magazinData);
    } catch (error) {
      console.error("API isteği sırasında hata oluştu:", error);
    }
  };

  const fetchTravelData = async () => {
    // * Request GOOGLE API
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=travel&printType=books&key=${API_KEY}&maxResults=5`
      );
      const travelData = response.data.items;
      setTravelData(travelData);
    } catch (error) {
      console.error("API isteği sırasında hata oluştu:", error);
    }
  };

  // * Request GOOGLE API
  const fetchSelfImprovementBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=self-improvement&printType=books&key=${API_KEY}&maxResults=5`
      );
      const selfImprovementsData = response.data.items;
      setSelfImprovementData(selfImprovementsData);
    } catch (error) {
      console.error("API isteği sırasında hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchMagazinData();
    fetchTravelData();
    fetchSelfImprovementBooks();
  }, []);

  // * Adding books to favorites
  const handleFavoriteClick = async (book: Book) => {
    if (book.volumeInfo) {
      const title = book.volumeInfo.title;
      const thumbnail = book.volumeInfo.imageLinks?.thumbnail;

      if (title && thumbnail) {
        const favoriteBook = {
          title: title,
          thumbnail: thumbnail,
        };

        try {
          const response = await axios.post(
            "http://localhost:2080/api/v1/favoriteBooks",
            favoriteBook
          );
          console.log("Kitap favorilere eklendi.", response.data);
        } catch (error) {
          console.error("Kitap eklenirken hata oluştu.", error);
        }
      }
    }
  };

  return (
    <>
      <h1 className="title"> Magazines</h1>
      <div className="card">
        {magazinData.map((book, key) => (
          <div key={key}>
            <BookItem
              book={book}
              isFavorite={false}
              handleFavoriteClick={handleFavoriteClick}
            />
          </div>
        ))}
      </div>
      <h1 className="title"> Travel </h1>
      <div className="card">
        {travelData.map((book, key) => (
          <BookItem
            book={book}
            key={key}
            isFavorite={false}
            handleFavoriteClick={handleFavoriteClick}
          />
        ))}
      </div>

      <h1 className="title"> Self Improvement</h1>
      <div className="card">
        {selfImprovementData.map((book, key) => (
          <BookItem
            book={book}
            key={key}
            isFavorite={false}
            handleFavoriteClick={handleFavoriteClick}
          />
        ))}
      </div>
    </>
  );
}

export default Explore;

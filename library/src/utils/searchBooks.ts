import axios from "axios";

const searchBooks = async (term: string) => {
  const API_KEY = "AIzaSyBfvcfm0g1JIZNKGay2q2qifZULH9cR1E4";

  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&projection=lite&key=${API_KEY}&maxResults=20`
    );
    const bookData = response.data.items;
    console.log(bookData);
    return bookData;
  } catch (error) {
    console.error("API isteği sırasında hata oluştu:", error);
  }
};

export default searchBooks;

import SearchIcon from "@mui/icons-material/Search";

import "../style/Home.css";
import { useState, ChangeEvent, FormEvent } from "react";
import searchBooks from "../utils/searchBooks";
import BookList from "../Components/BookList";

function Home() {
  // * A state variable named 'search' contains the user's search term
  const [search, setSearch] = useState<string>("");
  // * A state variable named 'books' contains the book search results.
  const [books, setBooks] = useState<string[]>([]);

  // * Api request parameter and check request parameter
  const handleApiSubmit = async (term: string) => {
    const result = await searchBooks(term);
    result === undefined
      ? alert("No books were found. Please try a different search term.")
      : setBooks(result || []);
  };

  // * Checks the search term entered by the user
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search.trim() === "" ? alert("Please enter a book title.") : await handleApiSubmit(search);
  };

  // * It is used to track the user's search term in real-time
  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <h1> Book Corner </h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search a book ?"
          value={search}
          onChange={handleSubmit}
        />
        <button className="search-submit" type="submit">
          <SearchIcon />
        </button>
      </form>
      <BookList books={books} />
    </div>
  );
}

export default Home;

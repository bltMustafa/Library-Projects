import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import FavoriteBook from "./Components/FavoriteBook";
import Footer from "./Components/Footer";
import Explore from "./Components/Explore";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/favorite" element={<FavoriteBook />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

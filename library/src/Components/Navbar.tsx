import "../style/Navbar.css";

import { Link } from "react-router-dom";

// * Navbar codes

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <Link to="/"> Home</Link>
        <div className="mainLink">
          <Link to="/explore">Other</Link>
          <Link to="/favorite">My List</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

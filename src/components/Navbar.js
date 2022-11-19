import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [isExpandNavbar, setIsExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={isExpandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setIsExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
}

export default Navbar;

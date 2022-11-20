import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [isExpandNavbar, setIsExpandNavbar] = useState(false);
  const location = useLocation();

  // Whenever the location changes, the Navbar will be closed, 
  // and the contents of the page will be shown.
  
  useEffect(() => {
    setIsExpandNavbar(false);
  }, [location]);

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
        <a href="#footer">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

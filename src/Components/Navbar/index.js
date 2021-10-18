import React, { useState } from "react";
import "./index.css";
import { Link } from "react-scroll";

function Heading() {
  const [navbar, setNavbar] = useState(false);
  const changeBackround = () => {
    if (window.scrollY >= 8) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackround);
  return (
    <div bg="dark" expand="lg" className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-left" >
        <Link to="about" smooth={true} duration={1200}>
          <p>Home</p>
        </Link>
      </div>

       {/* nav Link */}

      <div className="nav-right">
        <Link to="about" smooth={true} duration={1200}>
          <p>Home</p>
        </Link>
        <Link to="about" smooth={true} duration={1200}>
          <p>About Me</p>
        </Link>
        <Link to="skills" smooth={true} duration={1200}>
          <p>Skills</p>
        </Link>
        <Link to="contact" smooth={true} duration={1200}>
          <p>Contact </p>
        </Link>
      </div>
    </div>
  );
}

export default Heading;

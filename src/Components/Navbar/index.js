import React, { useState } from 'react';
import  "./index.css";
import  {Link} from "react-scroll"

function Index() {
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
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-left">
     <h3>Sridhar</h3>
      </div>
      <div className="nav-right">
        <Link to="home" smooth={true} duration={600}>
          <p>Home</p>
        </Link>
        <Link to="about" smooth={true} duration={600}>
          <p>About</p>
        </Link>
        <Link to="skills" smooth={true} duration={600}>
          <p>Skills</p>
        </Link>
        <Link to="contact" smooth={true} duration={600}>
          <p>Contact</p>
        </Link>
        </div>
      
    </div>
  )
}

export default Index

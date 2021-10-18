import React from "react";
import "./Home.css";
import { Element } from "react-scroll";
import { Button } from "react-bootstrap";
import home from "../../../assets/home.svg";

function Home() {
  return (
    <Element id="home" className="home">
      

      <div className="homepage">
      <div className="home-img">
        <img src={home} alt="logo" width="100%" />
      </div>
      <div className="home-content">
        <h1>
          Hai. I am <span> Sridhar</span>
        </h1>
        <p>I am a React-Developer</p>
        <a href="https://api.whatsapp.com/send?phone=91874892297">
          <Button className="btn-Contact">Contact Me</Button>
        </a>
        </div>
      </div>
    </Element>
  );
}

export default Home;

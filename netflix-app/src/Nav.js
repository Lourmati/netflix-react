import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();


  const transitionNavBar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
        onClick={() => navigate("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        ></img>

        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://shorturl.at/fzAI8"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Nav;

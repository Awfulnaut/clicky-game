import React from "react";
import "../styles/Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-dark bg-dark">
    <p className="navbar-brand">Clicky Game</p>
    <p className="nav-item">Score: {props.score} | Top Score: {props.highScore}</p>
  </nav>
)

export default Navbar;
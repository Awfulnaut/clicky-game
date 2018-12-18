import React from "react";
import "../styles/Navbar.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const Navbar = props => (
  <nav className="navbar navbar-dark bg-dark">
    <p className="navbar-brand">Clicky Game</p>
    <p className="nav-item">Score: {props.score} | Top Score: {props.topScore}</p>
  </nav>
)

export default Navbar;
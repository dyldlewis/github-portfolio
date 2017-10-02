import React from "react"
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <h1>Dylan's Portfolio</h1>
      <Link to="/">Projects</Link> | <Link to="/about">About</Link>
    </div>
  )
}

export default Header;

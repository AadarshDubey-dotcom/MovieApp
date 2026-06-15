import React from 'react'
import {Link} from "react-router-dom"
import "../css/Navbar.css"

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to ="/">Movies App</Link>
      </div>
      <div className="navbar-links">
           <Link to="/Home" className="nav-link">Home</Link>
           <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </div>
  )
}

export default NavBar

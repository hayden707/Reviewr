import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <div className="Nav">
      <nav className="navbar">
        <p>Reviewr</p>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/signup">
          Signup
        </NavLink>
        <NavLink className="navlink" to="/login">
          Login
        </NavLink>
        <NavLink className="navlink" to="/search">
          Search
        </NavLink>
        <NavLink className="navlink" to="/albumreviews/">
          Albums
        </NavLink>
        <button>Logout</button>
      </nav>
    </div>
  )
}

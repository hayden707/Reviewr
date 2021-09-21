import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
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
      </nav>
    </div>
  )
}

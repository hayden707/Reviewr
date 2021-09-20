import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav className="NavBar">
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="/about">
          About
        </NavLink>
        <NavLink className="NavLink" to="/signup">
          Signup
        </NavLink>
        <NavLink className="NavLink" to="/login">
          Login
        </NavLink>
      </nav>
    </div>
  )
}

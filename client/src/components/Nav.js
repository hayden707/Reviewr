import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import musicnote from '../images/musicnote.png'

export default function Nav() {
  return (
    <div className="Nav">
      <nav className="navbar">
        <p>
          <NavLink className="navlink" to="/">
            <img src={musicnote} id="app-logo" alt="music-note" />
          </NavLink>
        </p>

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
        <NavLink className="navlink" to="/userprofile/">
          Profile
        </NavLink>
        <button>Logout</button>
      </nav>
    </div>
  )
}

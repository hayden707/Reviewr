import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import musicnote from '../images/musicnote.png'

export default function Nav(props) {
  return (
    <div className="Nav">
      {props.authenticated ? (
        <nav className="navbar">
          <p>
            <NavLink className="navlink" to="/">
              <img src={musicnote} id="app-logo" alt="music-note" />
            </NavLink>
            Reviewr
          </p>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
          <NavLink className="navlink" to="/search">
            Search
          </NavLink>
          <NavLink
            className="navlink"
            to={props.user.id ? `/userprofile/${props.user.id}` : '/'}
          >
            Profile
          </NavLink>
          <button onClick={props.handleLogOut}>Logout</button>
        </nav>
      ) : (
        <nav className="navbar">
          <p>
            <NavLink className="navlink" to="/">
              <img src={musicnote} id="app-logo" alt="music-note" />
            </NavLink>
            Reviewr
          </p>
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
        </nav>
      )}
    </div>
  )
}

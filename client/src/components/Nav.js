import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import MusicNote from './MusicNote'

export default function Nav(props) {
  const profileLink = () => {
    if (props.authenticated && props.user) {
      return `/userprofile/${props.user.id}`
    }
    return '/'
  }

  return (
    <div className="Nav">
      {props.authenticated && props.user ? (
        <nav className="navbar">
          <NavLink className="navlink main-link" to="/">
            <MusicNote />
            <h2 className="Reviewr">Reviewr</h2>
          </NavLink>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
          <NavLink className="navlink" to="/search">
            Search
          </NavLink>

          <NavLink className="navlink" to={profileLink}>
            {props.user.username}'s Profile
          </NavLink>
          <button onClick={props.handleLogOut}>Logout</button>
        </nav>
      ) : (
        <nav className="navbar">
          <NavLink className="navlink main-link" to="/">
            <MusicNote />
            <h2 className="Reviewr">Reviewr</h2>
          </NavLink>
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

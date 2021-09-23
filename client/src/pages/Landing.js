import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing-grid">
      <img className="landing-image" src="https://i.imgur.com/XFthwBW.jpg" />

      <div className="landing-text-container">
        <div className="landing-text-flex">
          <h3>Review music your way.</h3>
          <p>
            User generated reviews written by normal people, for normal people.
            Your one site stop to listen, rate, and write about the albums you
            love (and trash the ones you don't).
          </p>
          <Link to="/signup">
            <button>Sign up now.</button>
          </Link>
          <p>Already registered?</p>
          <Link to="/login">Log in here.</Link>
        </div>
      </div>
    </div>
  )
}

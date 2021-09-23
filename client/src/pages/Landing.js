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
            Rate and keep a list of the music you've been listening to, and see
            what other listeners think.
          </p>
          <button>Sign up now.</button>
          <p>Already registered?</p>
          <Link>Log in here.</Link>
        </div>
      </div>
    </div>
  )
}

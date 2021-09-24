import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import Video from '../assets/video.mp4'

export default function Landing() {
  return (
    <div className="landing-grid">
      <div className="landing-video-container">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="landing-text-container">
        <div className="landing-text-flex">
          <h3>Review music your way.</h3>
          <p>
            User generated reviews written by normal people, for normal people.
            Your one site stop to listen, rate, and write about the albums you
            love (and critique the ones you don't).
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

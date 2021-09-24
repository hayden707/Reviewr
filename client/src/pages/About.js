import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-grid">
      <div className="img-container">
        <img
          className="about-img"
          src="https://i.imgur.com/DZnD12p.jpg"
          alt="about"
        />
      </div>
      <div className="text-container">
        <h3>About Reviewr</h3>
        <p>
          User generated reviews written by normal people, for normal people.
          Your one site stop to listen, rate, and write about the albums you
          love (and critique the ones you don't).
        </p>
      </div>
    </div>
  )
}

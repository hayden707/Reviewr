import React from 'react'

export default function Signup() {
  return (
    <div>
      <h2>Let's get started.</h2>
      <form className="signup-form">
        <label>Email:</label>
        <input
          className="email-signup"
          type="text"
          name="email"
          required
        ></input>
        <label>Username:</label>
        <input
          className="username-signup"
          type="text"
          name="username"
          required
        ></input>
        <label>Password:</label>
        <input
          className="password-signup"
          type="text"
          name="password"
          required
        ></input>
        <label>Confirm Password:</label>
        <input
          className="confirm-password-signup"
          type="text"
          name="confirm-password"
          required
        ></input>
        <button className="signup-button">Signup Now</button>
      </form>
    </div>
  )
}

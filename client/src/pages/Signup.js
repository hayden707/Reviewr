import React from 'react'

export default function Signup() {
  return (
    <div>
      <h2>Let's get started.</h2>
      <form className="SignupForm">
        <label>Email:</label>
        <input className="EmailSignup" name="Email" required></input>
        <label>Username:</label>
        <input className="UsernameSignup" name="Username" required></input>
        <label>Password:</label>
        <input className="PasswordSignup" name="Password" required></input>
        <label>Confirm Password:</label>
        <input
          className="ConfirmPasswordSignup"
          name="ConfirmPassword"
          required
        ></input>
        <button className="SignupButton">Signup Now</button>
      </form>
    </div>
  )
}
